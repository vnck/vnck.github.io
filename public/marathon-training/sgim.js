/* SGIM print textures, shared by road.html and tracker.html.
   Generates halftone screens, ink mottling and paper grain once per load and exposes them as CSS
   custom properties on :root (used as masks, so the same texture prints in any ink and either theme).
   Also exposed as canvases on window.SGIM.tex for the week image. */
(function(){
  var R=Math.min(2,window.devicePixelRatio||1);
  var mk=function(w,h){var c=document.createElement('canvas');c.width=Math.round(w*R);c.height=Math.round(h*R);var g=c.getContext('2d');g.scale(R,R);return {c:c,g:g}};
  var seed=7,rnd=function(){return (seed=(seed*16807)%2147483647)/2147483647};
  var clamp=function(v){return v<0?0:v>1?1:v};
  var smooth=function(t){t=clamp(t);return t*t*(3-2*t)};

  // Smooth, tileable blotch noise: random low-res grid drawn 3×3 with smoothing, keep the centre tile.
  function blotch(size,cells,layers){
    var out=mk(size,size),g=out.g;
    layers.forEach(function(L){
      var n=Math.max(2,Math.round(cells*L.f)),s=document.createElement('canvas');s.width=s.height=n;
      var sg=s.getContext('2d'),im=sg.createImageData(n,n);
      for(var i=0;i<n*n;i++){var v=rnd();im.data[i*4]=im.data[i*4+1]=im.data[i*4+2]=255;im.data[i*4+3]=Math.round(255*Math.pow(v,L.p||1))}
      sg.putImageData(im,0,0);
      g.globalAlpha=L.a;g.imageSmoothingEnabled=true;
      for(var y=-1;y<=1;y++)for(var x=-1;x<=1;x++)g.drawImage(s,x*size,y*size,size,size);
    });
    g.globalAlpha=1;return out.c;
  }
  // Paper grain: dense faint grain plus sparse hard specks.
  function grain(size,density,strength){
    var c=document.createElement('canvas');c.width=c.height=size;var g=c.getContext('2d'),im=g.createImageData(size,size);
    for(var i=0;i<size*size;i++){var r=rnd();im.data[i*4]=im.data[i*4+1]=im.data[i*4+2]=255;im.data[i*4+3]=r<density?Math.round(255*strength*(.4+.6*rnd())):0}
    g.putImageData(im,0,0);return c;
  }
  // A 45° halftone screen: dots on a diamond lattice with pitch s; radius from f(x,y) in 0..1.
  function screen(w,h,s,f,jitter){
    var out=mk(w,h),g=out.g;g.fillStyle='#fff';g.beginPath();
    for(var j=0,y=0;y<h+s;j++,y+=s)for(var x=(j%2)*s;x<w+2*s;x+=2*s){
      var t=f(x,y);if(jitter)t*=1+(rnd()-.5)*jitter;var r=s*.74*clamp(t);
      if(r>.18){g.moveTo(x+r,y);g.arc(x,y,r,0,7)}
    }
    g.fill();return out.c;
  }

  var tex={};
  tex.grain=grain(240,.22,.55);
  tex.specks=grain(300,.012,1);
  // uneven ink on a solid: faint broad variation plus fine grain and pinholes where the paper shows through
  tex.mottle=(function(){var size=320,c=blotch(size,6,[{f:1,a:.05,p:1.5}]),g=c.getContext('2d'),s=c.width,im=g.getImageData(0,0,s,s),d=im.data;
    for(var i=0;i<s*s;i++){var r=rnd(),a=r<.012?.38:r*.09;d[i*4]=d[i*4+1]=d[i*4+2]=255;d[i*4+3]=Math.min(255,d[i*4+3]+Math.round(255*a))}
    g.putImageData(im,0,0);return c})();
  // the same blotches in black, for ink on black stock where thin coverage shows dark paper
  tex.mottleDark=(function(){var c=document.createElement('canvas');c.width=tex.mottle.width;c.height=tex.mottle.height;var g=c.getContext('2d');g.drawImage(tex.mottle,0,0);g.globalCompositeOperation='source-in';g.fillStyle='#000';g.fillRect(0,0,c.width,c.height);return c})();
  // vertical fade: no dots at the top, solid at the bottom; the 24px tile is whole lattice periods, so it repeats seamlessly
  tex.fade=screen(24,96,3,function(x,y){return smooth(y/92)},0);
  // rising sun: solid core, dots shrinking toward the rim, a little press jitter
  tex.sun=screen(520,520,6,function(x,y){var d=Math.hypot(x-260,y-260)/260;return d<.2?1:smooth((1-d)/.8)*1.05},.14);
  // flat fine tint
  tex.tint=screen(24,24,3,function(){return .42},0);

  var root=document.documentElement,u=function(c){return 'url('+c.toDataURL('image/png')+')'};
  var sz=function(c){return (c.width/R)+'px '+(c.height/R)+'px'};
  root.style.setProperty('--tx-grain',u(tex.grain));
  root.style.setProperty('--tx-specks',u(tex.specks));
  root.style.setProperty('--tx-mottle',u(tex.mottle));
  root.style.setProperty('--tx-mottle-dark',u(tex.mottleDark));
  root.style.setProperty('--tx-fade',u(tex.fade));root.style.setProperty('--tx-fade-size',sz(tex.fade));
  root.style.setProperty('--tx-sun',u(tex.sun));
  root.style.setProperty('--tx-tint',u(tex.tint));root.style.setProperty('--tx-tint-size',sz(tex.tint));
  root.classList.add('tx');
  window.SGIM={tex:tex,scale:R};
})();
