import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Image_Trail.css';

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e, rect) {
  const clientX = e.touches?.[0]?.clientX ?? e.clientX;
  const clientY = e.touches?.[0]?.clientY ?? e.clientY;
  return { x: clientX - rect.left, y: clientY - rect.top };
}

function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  constructor(DOM_el) {
    this.DOM = { el: DOM_el, inner: DOM_el.querySelector('.content__img-inner') };
    this.defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
    this.getRect();
    this.initEvents();
  }
  
  getRect() {
    if (this.DOM.el) {
      this.rect = this.DOM.el.getBoundingClientRect();
    }
  }
  
  initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener('resize', this.resize);
  }
  
  destroy() {
    window.removeEventListener('resize', this.resize);
  }
}

class ImageTrail {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.handlePointerMove = ev => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    
    container.addEventListener('mousemove', this.handlePointerMove);
    container.addEventListener('touchmove', this.handlePointerMove);
    
    this.initRender = ev => {
      this.mousePos = getLocalPointerPos(ev, container.getBoundingClientRect());
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', this.initRender);
      container.removeEventListener('touchmove', this.initRender);
    };
    container.addEventListener('mousemove', this.initRender);
    container.addEventListener('touchmove', this.initRender);
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    if (!this.images.length) return;
    
    ++this.zIndexVal;
    this.imgPosition = (this.imgPosition + 1) % this.images.length;
    const img = this.images[this.imgPosition];
    if (!img.rect) img.getRect();
    
    gsap.killTweensOf(img.DOM.el);
    gsap.timeline()
      .fromTo(img.DOM.el, {
        opacity: 1,
        scale: 1,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4,
        ease: 'power1',
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4,
        ease: 'power3',
        opacity: 0,
        scale: 0.2
      }, 0.4);
  }

  destroy() {
    this.container.removeEventListener('mousemove', this.handlePointerMove);
    this.container.removeEventListener('touchmove', this.handlePointerMove);
    this.images.forEach(img => img.destroy());
  }
}

export default function ImageTrailComponent({ items = [] }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const trail = new ImageTrail(containerRef.current);
    return () => trail.destroy();
  }, [items]);

  return (
    <div className="content" ref={containerRef}>
      {items.map((url, i) => (
        <div className="content__img" key={i}>
          <div
            className="content__img-inner"
            style={{ backgroundImage: `url(${url})` }}
          />
        </div>
      ))}
    </div>
  );
}