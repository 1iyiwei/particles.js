/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

import * as Particles from './particles.js';
export default Particles;

const particlesJS = {};
export {particlesJS as JS};

particlesJS.Engine = function(tag_id, canvas_class_name, params, bodyPoints) {
  const canvas_el = document.querySelector('#'+tag_id+' > .'+canvas_class_name) || document.querySelector('input[name="'+tag_id+'"] > .'+canvas_class_name) || document.getElementsByName(tag_id)[0].getElementsByClassName(canvas_class_name)[0];

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight,
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#fff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: '',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000,
        },
      },
      array: [],
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        blow: {
          distance: 200,
          velocity: {x: 0, y: -10}, // negative points upward in html canvas
          duration: 0.4,
        },
        swirl: {
          distance: 200,
          velocity: 10,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
      mouse: {},
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors: {},
    },
    tmp: {},
  };

  // const bodyPoints = ['lefthand', 'righthand', 'lefteye', 'righteye', 'forehead', 'nose'];
  for(let part of bodyPoints) {
    this.pJS.interactivity.events['on' + part] = {"enable": false, "mode": "bubble"};
  }

  const pJS = this.pJS;

  /* params settings */
  if (params) {
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance,
    mode_swirl_distance: pJS.interactivity.modes.swirl.distance,
    mode_blow_distance: pJS.interactivity.modes.blow.distance,
  };


  pJS.fn.retinaInit = function() {
    if (pJS.retina_detect && window.devicePixelRatio > 1) {
      pJS.canvas.pxratio = window.devicePixelRatio;
      pJS.tmp.retina = true;
    } else {
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.swirl.distance = pJS.tmp.obj.mode_swirl_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.blow.distance = pJS.tmp.obj.mode_blow_distance * pJS.canvas.pxratio;
  };


  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function() {
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function() {
    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if (pJS && pJS.interactivity.events.resize) {
      window.addEventListener('resize', function() {
        pJS.canvas.w = pJS.canvas.el.offsetWidth;
        pJS.canvas.h = pJS.canvas.el.offsetHeight;

        /* resize canvas */
        if (pJS.tmp.retina) {
          pJS.canvas.w *= pJS.canvas.pxratio;
          pJS.canvas.h *= pJS.canvas.pxratio;
        }

        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;

        /* repaint canvas on anim disabled */
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesEmpty();
          pJS.fn.particlesCreate();
          pJS.fn.particlesDraw();
          pJS.fn.vendors.densityAutoParticles();
        }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();
      });
    }
  };


  pJS.fn.canvasPaint = function() {
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function() {
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position) {
    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if (pJS.particles.size.anim.enable) {
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if (!pJS.particles.size.anim.sync) {
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if (this.x > pJS.canvas.w - this.radius*2) {
      this.x = this.x - this.radius;
    } else if (this.x < this.radius*2) {
      this.x = this.x + this.radius;
    }
    if (this.y > pJS.canvas.h - this.radius*2) {
      this.y = this.y - this.radius;
    } else if (this.y < this.radius*2) {
      this.y = this.y + this.radius;
    }

    /* check position - avoid overlap */
    if (pJS.particles.move.bounce) {
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if (typeof(color.value) == 'object') {
      if (color.value instanceof Array) {
        const color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      } else {
        if (color.value.r != undefined && color.value.g != undefined && color.value.b != undefined) {
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b,
          };
        }
        if (color.value.h != undefined && color.value.s != undefined && color.value.l != undefined) {
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l,
          };
        }
      }
    } else if (color.value == 'random') {
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
      };
    } else if (typeof(color.value) == 'string') {
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if (pJS.particles.opacity.anim.enable) {
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if (!pJS.particles.opacity.anim.sync) {
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    let velbase = {};
    switch (pJS.particles.move.direction) {
    case 'top':
      velbase = {x: 0, y: -1};
      break;
    case 'top-right':
      velbase = {x: 0.5, y: -0.5};
      break;
    case 'right':
      velbase = {x: 1, y: -0};
      break;
    case 'bottom-right':
      velbase = {x: 0.5, y: 0.5};
      break;
    case 'bottom':
      velbase = {x: 0, y: 1};
      break;
    case 'bottom-left':
      velbase = {x: -0.5, y: 1};
      break;
    case 'left':
      velbase = {x: -1, y: 0};
      break;
    case 'top-left':
      velbase = {x: -0.5, y: -0.5};
      break;
    default:
      velbase = {x: 0, y: 0};
      break;
    }

    if (pJS.particles.move.straight) {
      this.vx = velbase.x;
      this.vy = velbase.y;
      if (pJS.particles.move.random) {
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    } else {
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // let theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;


    /* if shape is image */

    const shape_type = pJS.particles.shape.type;
    if (typeof(shape_type) == 'object') {
      if (shape_type instanceof Array) {
        const shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    } else {
      this.shape = shape_type;
    }

    if (this.shape == 'image') {
      const sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height,
      };
      if (!this.img.ratio) {
        this.img.ratio = 1;
      }
      if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined) {
        pJS.fn.vendors.createSvgImg(this);
        if (pJS.tmp.pushing) {
          this.img.loaded = false;
        }
      }
    }
  };


  pJS.fn.particle.prototype.draw = function() {
    const p = this;

    let radius = 0;
    if (p.radius_bubble != undefined) {
      radius = p.radius_bubble;
    } else {
      radius = p.radius;
    }

    let opacity = 0;
    if (p.opacity_bubble != undefined) {
      opacity = p.opacity_bubble;
    } else {
      opacity = p.opacity;
    }

    let color_value = 0;
    if (p.color.rgb) {
      color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    } else {
      color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch (p.shape) {
    case 'circle':
      pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

    case 'edge':
      pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

    case 'triangle':
      pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

    case 'polygon':
      pJS.fn.vendors.drawShape(
        pJS.canvas.ctx,
        p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
        p.y - radius / (2.66/3.5), // startY
        radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
        pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
        1, // sideCountDenominator
      );
      break;

    case 'star':
      pJS.fn.vendors.drawShape(
        pJS.canvas.ctx,
        p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
        p.y - radius / (2*2.66/3.5), // startY
        radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
        pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
        2, // sideCountDenominator
      );
      break;

    case 'image':
      {
        const draw = function() {
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio,
          );
        };

        let img_obj = null;
        if (pJS.tmp.img_type == 'svg') {
          img_obj = p.img.obj;
        } else {
          img_obj = pJS.tmp.img_obj;
        }

        if (img_obj) {
          draw();
        }
      }
      break;
    }

    pJS.canvas.ctx.closePath();

    if (pJS.particles.shape.stroke.width > 0) {
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }

    pJS.canvas.ctx.fill();
  };


  pJS.fn.particlesCreate = function() {
    for (let i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function() {
    for (let i = 0; i < pJS.particles.array.length; i++) {
      /* the particle */
      const p = pJS.particles.array[i];

      // let d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // let f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     let t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if (pJS.particles.move.enable) {
        const ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if (pJS.particles.opacity.anim.enable) {
        if (p.opacity_status == true) {
          if (p.opacity >= pJS.particles.opacity.value) {
            p.opacity_status = false;
          }
          p.opacity += p.vo;
        } else {
          if (p.opacity <= pJS.particles.opacity.anim.opacity_min) {
            p.opacity_status = true;
          }
          p.opacity -= p.vo;
        }
        if (p.opacity < 0) {
          p.opacity = 0;
        }
      }

      /* change size */
      if (pJS.particles.size.anim.enable) {
        if (p.size_status == true) {
          if (p.radius >= pJS.particles.size.value) {
            p.size_status = false;
          }
          p.radius += p.vs;
        } else {
          if (p.radius <= pJS.particles.size.anim.size_min) {
            p.size_status = true;
          }
          p.radius -= p.vs;
        }
        if (p.radius < 0) {
          p.radius = 0;
        }
      }

      let new_pos = null;
      /* change particle position if it is out of canvas */
      if (pJS.particles.move.out_mode == 'bounce') {
        new_pos = {
          x_left: p.radius,
          x_right: pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h,
        };
      } else {
        new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius,
        };
      }

      if (p.x - p.radius > pJS.canvas.w) {
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      } else if (p.x + p.radius < 0) {
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if (p.y - p.radius > pJS.canvas.h) {
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      } else if (p.y + p.radius < 0) {
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch (pJS.particles.move.out_mode) {
      case 'bounce':
        if (p.x + p.radius > pJS.canvas.w) {
          p.vx = -p.vx;
        } else if (p.x - p.radius < 0) {
          p.vx = -p.vx;
        }
        if (p.y + p.radius > pJS.canvas.h) {
          p.vy = -p.vy;
        } else if (p.y - p.radius < 0) {
          p.vy = -p.vy;
        }
        break;
      }

      /* events */
      //for (const [effectType, effectFunc] of Object.entries(effectNameFuncPairs))
      for (const effectFunc of Object.values(effectNameFuncPairs)) {
        effectFunc(p);
      }

      /* interaction auto between particles */
      if (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable) {
        for (let j = i + 1; j < pJS.particles.array.length; j++) {
          const p2 = pJS.particles.array[j];

          /* link particles */
          if (pJS.particles.line_linked.enable) {
            pJS.fn.interact.linkParticles(p, p2);
          }

          /* attract particles */
          if (pJS.particles.move.attract.enable) {
            pJS.fn.interact.attractParticles(p, p2);
          }

          /* bounce particles */
          if (pJS.particles.move.bounce) {
            pJS.fn.interact.bounceParticles(p, p2);
          }
        }
      }
    }
  };

  pJS.fn.particlesDraw = function() {
    // console.log('draw', tag_id, pJS.particles.array.length);

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for (let i = 0; i < pJS.particles.array.length; i++) {
      const p = pJS.particles.array[i];
      p.draw();
    }
  };

  pJS.fn.particlesEmpty = function() {
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function() {
    /* init all */
    window.cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    window.cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();

    /* restart */
    pJS.fn.vendors.start();
  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if (dist <= pJS.particles.line_linked.distance) {
      const opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if (opacity_line > 0) {
        /* style */
        const color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        // pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();
      }
    }
  };


  pJS.fn.interact.attractParticles = function(p1, p2) {
    /* condensed particles */
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dist = Math.sqrt(dx*dx + dy*dy);

    if (dist <= pJS.particles.line_linked.distance) {
      const ax = dx/(pJS.particles.move.attract.rotateX*1000);
      const ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;
    }
  };


  pJS.fn.interact.bounceParticles = function(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    const dist_p = p1.radius+p2.radius;

    if (dist <= dist_p) {
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }
  };


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos) {
    pJS.tmp.pushing = true;

    for (let i = 0; i < nb; i++) {
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h,
          },
        ),
      );
      if (i == nb-1) {
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }
  };


  pJS.fn.modes.removeParticles = function(nb) {
    pJS.particles.array.splice(0, nb);
    if (!pJS.particles.move.enable) {
      pJS.fn.particlesDraw();
    }
  };

  function enableEventEffect(event, effect) {
    const onEvent = 'on'+event;
    return (pJS.interactivity.events[onEvent].enable && isInArray(effect, pJS.interactivity.events[onEvent].mode));
  }

  function enableStatusEvent(status, event) {
    return (pJS.interactivity.events['on'+event].enable && pJS.interactivity.status == status);
  }

  function enableStatusEventEffect(status, event, effect) {
    // return (pJS.interactivity.status == status) && enableEventEffect(event, effect);
    return enableStatusEvent(status, event) && isInArray(effect, pJS.interactivity.events['on'+event].mode);
  }

  function enableStatusBodyEventEffect(effect) {
    for(let part of bodyPoints) {
      if(enableStatusEventEffect(part, part, effect)) {
        return true;
      }
    }

    return false;
  }

  function enableMoveEffect(effect) {
    const answer = enableStatusEventEffect('mousemove', 'hover', effect) || enableStatusBodyEventEffect(effect);
    return answer;
  }

  function diffVect(p, pointer) {
    return {x: p.x - pointer.x, y: p.y - pointer.y};
  }

  function distance(p, pointer) {
    const diff = diffVect(p, pointer);
    const dx = diff.x;
    const dy = diff.y;
    return Math.sqrt(dx*dx + dy*dy);
  }

  function distMouse(p) {
    return distance(p, {x: pJS.interactivity.mouse.pos_x, y: pJS.interactivity.mouse.pos_y});
  }

  function distClick(p) {
    return distance(p, {x: pJS.interactivity.mouse.click_pos_x, y: pJS.interactivity.mouse.click_pos_y});
  }

  function bubbleParticleMove(p, activeStatus, leaveStatus) {
    const dist_mouse = distMouse(p);
    const ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

    let initialState = false;

    const init = function() {
      p.opacity_bubble = p.opacity;
      p.radius_bubble = p.radius;
      initialState = true;
    };

    /* mousemove - check ratio */
    if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
      if (ratio >= 0 && pJS.interactivity.status == activeStatus) {
        /* size */
        if (pJS.interactivity.modes.bubble.size != pJS.particles.size.value) {
          if (pJS.interactivity.modes.bubble.size > pJS.particles.size.value) {
            const size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
            if (size >= 0) {
              p.radius_bubble = size;
            }
          } else {
            const dif = p.radius - pJS.interactivity.modes.bubble.size;
            const size = p.radius - (dif*ratio);
            if (size > 0) {
              p.radius_bubble = size;
            } else {
              p.radius_bubble = 0;
            }
          }
        }

        /* opacity */
        if (pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value) {
          if (pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value) {
            const opacity = pJS.interactivity.modes.bubble.opacity*ratio;
            if (opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity) {
              p.opacity_bubble = opacity;
            }
          } else {
            const opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
            if (opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity) {
              p.opacity_bubble = opacity;
            }
          }
        }
      }
    } else {
      init();
    }

    /* mouseleave */
    if (pJS.interactivity.status == leaveStatus) {
      init();
    }

    return initialState;
  }

  function bubbleParticleClick(p) {
    const dist_mouse = distClick(p);
    const time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time) / 1000;

    if (pJS.tmp.bubble_clicking) {
      if (time_spent > pJS.interactivity.modes.bubble.duration) {
        pJS.tmp.bubble_duration_end = true;
      }

      if (time_spent > pJS.interactivity.modes.bubble.duration * 2) {
        pJS.tmp.bubble_clicking = false;
        pJS.tmp.bubble_duration_end = false;
      }
    }

    const process = function (bubble_param, particles_param, p_obj_bubble, p_obj, id) {
      if (bubble_param != particles_param) {
        if (!pJS.tmp.bubble_duration_end) {
          if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
            let obj = null;
            if (p_obj_bubble != undefined) {
              obj = p_obj_bubble;
            } else {
              obj = p_obj;
            }
            if (obj != bubble_param) {
              const value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
              if (id == 'size') {
                p.radius_bubble = value;
              }
              if (id == 'opacity') {
                p.opacity_bubble = value;
              }
            }
          } else {
            if (id == 'size') {
              p.radius_bubble = undefined;
            }
            if (id == 'opacity') {
              p.opacity_bubble = undefined;
            }
          }
        } else {
          if (p_obj_bubble != undefined) {
            const value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
            const dif = bubble_param - value_tmp;
            const value = bubble_param + dif;
            if (id == 'size') {
              p.radius_bubble = value;
            }
            if (id == 'opacity') {
              p.opacity_bubble = value;
            }
          }
        }
      }
    };

    if (pJS.tmp.bubble_clicking) {
      /* size */
      process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
      /* opacity */
      process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
    }
  }

  function leaveStatus(input) {
    return input + 'leave';
  }

  pJS.fn.modes.bubbleParticle = function(p) {
    /* on hover event */
    let status = false;

    for(const bodyPoint of bodyPoints) {
      if (!status && (enableStatusEventEffect(bodyPoint, bodyPoint, 'bubble') || enableStatusEventEffect(leaveStatus(bodyPoint), bodyPoint, 'bubble')  )) {
        bubbleParticleMove(p, bodyPoint, leaveStatus(bodyPoint));
        status = true;
      }
    }

    if(status) {
      // nothing else to do, handled above
    } else if (enableEventEffect('hover', 'bubble')) {
      bubbleParticleMove(p, 'mousemove', leaveStatus('mouse'));
    } else if (enableEventEffect('click', 'bubble')) {
      bubbleParticleClick(p);
    }
  };

  function repulseParticleMove(p) {
    const dx_mouse = p.x - pJS.interactivity.mouse.pos_x;
    const dy_mouse = p.y - pJS.interactivity.mouse.pos_y;
    const dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);
    const normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse};
    const repulseRadius = pJS.interactivity.modes.repulse.distance;
    const velocity = 100;
    const repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius, 2)+1)*repulseRadius*velocity, 0, 50);

    const pos = {
      x: p.x + normVec.x * repulseFactor,
      y: p.y + normVec.y * repulseFactor,
    };

    if (pJS.particles.move.out_mode == 'bounce') {
      if (pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) {
        p.x = pos.x;
      }
      if (pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) {
        p.y = pos.y;
      }
    } else {
      p.x = pos.x;
      p.y = pos.y;
    }
  }

  function repulseParticleClick(p) {
    if (!pJS.tmp.repulse_finish) {
      pJS.tmp.repulse_count++;
      if (pJS.tmp.repulse_count == pJS.particles.array.length) {
        pJS.tmp.repulse_finish = true;
      }
    }

    if (pJS.tmp.repulse_clicking) {
      const repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

      const dx = pJS.interactivity.mouse.click_pos_x - p.x;
      const dy = pJS.interactivity.mouse.click_pos_y - p.y;
      const d = dx*dx + dy*dy;

      const force = -repulseRadius / d * 1;

      const process = function() {
        const f = Math.atan2(dy, dx);
        p.vx = force * Math.cos(f);
        p.vy = force * Math.sin(f);

        if (pJS.particles.move.out_mode == 'bounce') {
          const pos = {
            x: p.x + p.vx,
            y: p.y + p.vy,
          };
          if (pos.x + p.radius > pJS.canvas.w) {
            p.vx = -p.vx;
          } else if (pos.x - p.radius < 0) {
            p.vx = -p.vx;
          }
          if (pos.y + p.radius > pJS.canvas.h) {
            p.vy = -p.vy;
          } else if (pos.y - p.radius < 0) {
            p.vy = -p.vy;
          }
        }
      };

      // default
      if (d <= repulseRadius) {
        process();
      }

      // bang - slow motion mode
      // if(!pJS.tmp.repulse_finish){
      //   if(d <= repulseRadius){
      //     process();
      //   }
      // }else{
      //   process();
      // }
    } else {
      if (pJS.tmp.repulse_clicking == false) {
        p.vx = p.vx_i;
        p.vy = p.vy_i;
      }
    }
  }

  pJS.fn.modes.repulseParticle = function(p) {
    if (enableMoveEffect('repulse')) {
      repulseParticleMove(p);
    } else if (enableEventEffect('click', 'repulse')) {
      repulseParticleClick(p);
    }
  };

  function grabParticle(p) {
    const dist_mouse = distMouse(p);

    /* draw a line between the cursor and the particle if the distance between them is under the config distance */
    if (dist_mouse <= pJS.interactivity.modes.grab.distance) {
      const opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

      if (opacity_line > 0) {
        /* style */
        const color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        // pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p.x, p.y);
        pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();
      }
    }
  }

  pJS.fn.modes.grabParticle = function(p) {
    if(enableMoveEffect('grab')) {
      grabParticle(p);
    }
  };

  function swirlParticle(p) {
    const dx_mouse = p.x - pJS.interactivity.mouse.pos_x;
    const dy_mouse = p.y - pJS.interactivity.mouse.pos_y;
    const dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);
    const normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse};
    const tangentVec = {x: -normVec.y, y: normVec.x};
    const swirlRadius = pJS.interactivity.modes.swirl.distance;
    const velocity = pJS.interactivity.modes.swirl.velocity;
    const swirlFactor = Math.exp(-Math.pow(dist_mouse/swirlRadius, 2))*velocity;

    const pos = {
      x: p.x + tangentVec.x * swirlFactor,
      y: p.y + tangentVec.y * swirlFactor,
    };

    p.x = pos.x;
    p.y = pos.y;
  }

  pJS.fn.modes.swirlParticle = function (p) {
    if (enableMoveEffect('swirl')) {
      swirlParticle(p);
    }
  };

  function blowParticle(p) {
    const dx_mouse = p.x - pJS.interactivity.mouse.pos_x;
    const dy_mouse = p.y - pJS.interactivity.mouse.pos_y;
    const dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);
    const normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse};

    const blowRadius = pJS.interactivity.modes.blow.distance;

    const velocity = pJS.interactivity.modes.blow.velocity;
    const velocityNorm = Math.sqrt(velocity.x*velocity.x + velocity.y*velocity.y);
    const velocityVec = {x: velocity.x/velocityNorm, y: velocity.y/velocityNorm};

    const angularFalloff = velocityVec.x*normVec.x + velocityVec.y*normVec.y;
    const spatialFalloff = Math.exp(-Math.pow(dist_mouse/blowRadius, 2));
    const blowFactor = spatialFalloff*clamp(angularFalloff, 0, Math.abs(angularFalloff));

    p.x += velocity.x*blowFactor;
    p.y += velocity.y*blowFactor;
  }

  pJS.fn.modes.blowParticle = function (p) {
    if (enableMoveEffect('blow')) {
      blowParticle(p);
    }
  };

  /* ---------- link custom effect(s) here ------------ */

  let effectNameFuncPairs =
  {
    'bubble': pJS.fn.modes.bubbleParticle,
    'repulse': pJS.fn.modes.repulseParticle,
    'grab': pJS.fn.modes.grabParticle,
    'swirl': pJS.fn.modes.swirlParticle,
    'blow': pJS.fn.modes.blowParticle
  };

  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function() {
    /* events target element */
    if (pJS.interactivity.detect_on == 'window') {
      pJS.interactivity.el = window;
    } else {
      pJS.interactivity.el = pJS.canvas.el;
    }

    const computeCoord = function(e) {
      let pos_x = 0;
      let pos_y = 0;

      if (pJS.interactivity.el == window) {
        pos_x = e.clientX,
        pos_y = e.clientY;
      } else {
        pos_x = e.offsetX || e.clientX,
        pos_y = e.offsetY || e.clientY;
      }

      return {x: pos_x, y: pos_y};
    };

    const addPointerEventListener = function(type, target) {
      pJS.interactivity.el.addEventListener(type,
        function(e) {
          const coord = computeCoord(e);
          const pos_x = coord.x;
          const pos_y = coord.y;

          target.pos_x = pos_x;
          target.pos_y = pos_y;

          if (pJS.tmp.retina) {
            target.pos_x *= pJS.canvas.pxratio;
            target.pos_y *= pJS.canvas.pxratio;
          }

          pJS.interactivity.status = (e.bodyEvent && !e.visibility) ? leaveStatus(type) : type;
        }
      );
    };

    for(const bodyPoint of bodyPoints) {
      if (pJS.interactivity.events['on' + bodyPoint].enable) {
        addPointerEventListener(bodyPoint, pJS.interactivity.mouse);
      }
    }

    /* detect mouse pos - on hover / click event */
    if (pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable) {
      /* el on mousemove */
      addPointerEventListener('mousemove', pJS.interactivity.mouse);

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener(leaveStatus('mouse'), function(/*e*/){
        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = leaveStatus('mouse');
      });
    }

    /* on click event */
    if (pJS.interactivity.events.onclick.enable) {
      pJS.interactivity.el.addEventListener('click', function() {
        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if (pJS.interactivity.events.onclick.enable) {
          switch (pJS.interactivity.events.onclick.mode) {
          case 'push':
            if (pJS.particles.move.enable) {
              pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
            } else {
              if (pJS.interactivity.modes.push.particles_nb == 1) {
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              } else if (pJS.interactivity.modes.push.particles_nb > 1) {
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
              }
            }
            break;

          case 'remove':
            pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

          case 'bubble':
            pJS.tmp.bubble_clicking = true;
            break;

          case 'repulse':
            pJS.tmp.repulse_clicking = true;
            pJS.tmp.repulse_count = 0;
            pJS.tmp.repulse_finish = false;
            setTimeout(function() {
              pJS.tmp.repulse_clicking = false;
            }, pJS.interactivity.modes.repulse.duration*1000);
            break;
          }
        }
      });
    }
  };

  pJS.fn.vendors.densityAutoParticles = function() {
    if (pJS.particles.number.density.enable) {
      /* calc area */
      let area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if (pJS.tmp.retina) {
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      const nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      const missing_particles = pJS.particles.array.length - nb_particles;
      if (missing_particles < 0) {
        pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      } else {
        pJS.fn.modes.removeParticles(missing_particles);
      }
    }
  };


  pJS.fn.vendors.checkOverlap = function(p1, position) {
    for (let i = 0; i < pJS.particles.array.length; i++) {
      const p2 = pJS.particles.array[i];

      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx*dx + dy*dy);

      if (dist <= p1.radius + p2.radius) {
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p) {
    /* set color to svg element */
    const svgXml = pJS.tmp.source_svg;
    const rgbHex = /#([0-9A-F]{3,6})/gi;
    const coloredSvgXml = svgXml.replace(rgbHex, function(/*m, r, g, b*/) {
      let color_value = null;
      if (p.color.rgb) {
        color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
      } else {
        color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
      }
      return color_value;
    });

    /* prepare to create img with colored svg */
    const svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'});
    const DOMURL = window.URL || window.webkitURL || window;
    const url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    const img = new Image();
    img.addEventListener('load', function() {
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;
  };


  this.destroy =
  pJS.fn.vendors.destroypJS = function() {
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    // window.pJSDom = null;
  };

  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    const sideCount = sideCountNumerator * sideCountDenominator;
    const decimalSides = sideCountNumerator / sideCountDenominator;
    const interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    const interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0, 0);
    for (let i = 0; i < sideCount; i++) {
      c.lineTo(sideLength, 0);
      c.translate(sideLength, 0);
      c.rotate(interiorAngle);
    }
    // c.stroke();
    c.fill();
    c.restore();
  };

  pJS.fn.vendors.exportImg = function() {
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type) {
    pJS.tmp.img_error = undefined;

    if (pJS.particles.shape.image.src != '') {
      if (type == 'svg') {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function(data) {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            } else {
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        };
        xhr.send();
      } else {
        const img = new Image();
        img.addEventListener('load', function() {
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;
      }
    } else {
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }
  };


  pJS.fn.vendors.draw = function() {
    if (pJS.particles.shape.type == 'image') {
      if (pJS.tmp.img_type == 'svg') {
        if (pJS.tmp.count_svg >= pJS.particles.number.value) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) {
            window.cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          } else {
            pJS.fn.drawAnimFrame = window.requestAnimFrame(pJS.fn.vendors.draw);
          }
        } else {
          // console.log('still loading...');
          if (!pJS.tmp.img_error) {
            pJS.fn.drawAnimFrame = window.requestAnimFrame(pJS.fn.vendors.draw);
          }
        }
      } else {
        if (pJS.tmp.img_obj != undefined) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) {
            window.cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          } else {
            pJS.fn.drawAnimFrame = window.requestAnimFrame(pJS.fn.vendors.draw);
          }
        } else {
          if (!pJS.tmp.img_error) {
            pJS.fn.drawAnimFrame = window.requestAnimFrame(pJS.fn.vendors.draw);
          }
        }
      }
    } else {
      pJS.fn.particlesDraw();
      if (!pJS.particles.move.enable) {
        window.cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      } else {
        pJS.fn.drawAnimFrame = window.requestAnimFrame(pJS.fn.vendors.draw);
      }
    }
  };


  pJS.fn.vendors.checkBeforeDraw = function() {
    // if shape is image
    if (pJS.particles.shape.type == 'image') {
      if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined) {
        console.warn('pJS.tmp.checkAnimFrame = window.requestAnimFrame(check)');
      } else {
        // console.log('images loaded! cancel check');
        window.cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if (!pJS.tmp.img_error) {
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
      }
    } else {
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }
  };


  pJS.fn.vendors.init = function() {
    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
  };


  pJS.fn.vendors.start = function() {
    if (isInArray('image', pJS.particles.shape.type)) {
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    } else {
      pJS.fn.vendors.checkBeforeDraw();
    }
  };


  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
}; // particlesJS.Engine

/* ---------- global functions - vendors ------------ */

function deepExtend(destination, source) {
  for (const property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      //arguments.callee(destination[property], source[property]);
      deepExtend(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
}
Object.deepExtend = deepExtend;

window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout;
} )();

function hexToRgb(hex) {
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];
particlesJS.canvas = [];

particlesJS.dispatchMouseEvent = function(e) {
  for(const receiver of particlesJS.canvas) {
    let eCopy = new MouseEvent(e.type, e);
    receiver.dispatchEvent(eCopy);
  }
};

function translateBodyEventType(event) {
  let answer = event.name.replace('Filtered', "");
  answer = answer.toLowerCase();
  return answer;
}

particlesJS.cloneEvent = function(e) {
  if (e===undefined || e===null) {
    return undefined;
  }
  const eventType = translateBodyEventType(e);
  let clone = new Event(eventType, e);
  for (let p in e) {
    let d=Object.getOwnPropertyDescriptor(e, p);
    if (d && (d.get || d.set)) {
      Object.defineProperty(clone, p, d);
    } else if(p != 'type') {
      //console.log(p, clone[p], e[p]);
      clone[p] = e[p];
    }
  }
  Object.setPrototypeOf(clone, e);
  return clone;
};

particlesJS.dispatchBodyEvent = function(e) {
  for(const receiver of particlesJS.canvas) {
    let eCopy = this.cloneEvent(e);
    eCopy.bodyEvent = true;
    receiver.dispatchEvent(eCopy);
  }
};

particlesJS.build = function(tag_id, params, canvas_class_name = 'particles-js-canvas-el', bodyPoints = []) {
  // console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if (typeof(tag_id) != 'string') {
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if (!tag_id) {
    tag_id = 'particles-js';
  }

  /* pJS elements */
  const pJS_tag = document.getElementById(tag_id) || document.getElementsByName(tag_id)[0];
  const pJS_canvas_class = canvas_class_name;
  const exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if (exist_canvas.length) {
    while (exist_canvas.length > 0) {
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  const canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = '100%';
  canvas_el.style.height = '100%';

  /* append canvas */
  const canvas = pJS_tag.appendChild(canvas_el);
  const engine = new particlesJS.Engine(tag_id, pJS_canvas_class, params, bodyPoints);

  /* launch particle.js */
  if (canvas != null) {
    window.pJSDom.push(engine);
    particlesJS.canvas.push(canvas);
  }

  return engine;
};

particlesJS.destroy = function() {
  for(const engine of window.pJSDom) {
    engine.destroy();
  }
  window.pJSDom = [];
  particlesJS.canvas = [];
};

particlesJS.load = function(tag_id, path_config_json, callback) {
  /* load json config */
  const xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function(data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        const params = JSON.parse(data.currentTarget.response);
        particlesJS.build(tag_id, params);
        if (callback) {
          callback();
        }
      } else {
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();
};
