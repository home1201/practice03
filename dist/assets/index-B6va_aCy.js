var m=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var r=(t,e,o)=>(m(t,e,"read from private field"),o?o.call(t):e.get(t)),d=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},a=(t,e,o,l)=>(m(t,e,"write to private field"),l?l.call(t,o):e.set(t,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();var u,i,c;class p{constructor(){d(this,u,null);d(this,i,null);d(this,c,null);a(this,u,document.querySelector("body")),a(this,i,document.querySelector("[data-menu-toggle]")),a(this,c,document.querySelector("[data-menu-list]"))}init(){r(this,i).addEventListener("click",()=>{r(this,i).dataset.menu==="opened"?(r(this,i).dataset.menu="closed",r(this,c).dataset.menu="closed",r(this,u).dataset.menu="closed"):(r(this,i).dataset.menu="opened",r(this,c).dataset.menu="opened",r(this,u).dataset.menu="opened")})}}u=new WeakMap,i=new WeakMap,c=new WeakMap;(async function(){new p().init()})();
