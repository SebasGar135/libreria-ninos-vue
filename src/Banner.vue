<template>
  <div
    style="
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      height: 320px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: #eee;
    "
  >
    <img
      src='/banner.jpg'
      alt="Portada"
      style="width: 100%; height: 100%; object-fit: cover; position: absolute; left: 0; top: 0; z-index: 1;"
    />
    <div
      style="
        position: relative;
        z-index: 2;
        color: #fff;
        text-align: center;
        width: 100%;
      "
    >
      <h1 style="font-size: 2.5rem; margin-bottom: 1rem; text-shadow: 0 2px 8px #0008;">
       Colecciones fantásticas
      </h1>
      <h1 style="font-size: 1.5rem; margin-bottom: 1rem; text-shadow: 0 2px 8px #0008;">
       Libros para todas las edades
      </h1>
      <button
        style="
          padding: 0.7em 2em;
          background: #D18971;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 2px 8px #0002;
        "
      >
        Ver todos los libros
      </button>
    </div>
  </div>
</template>