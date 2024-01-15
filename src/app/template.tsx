"use client";
import React, { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    /**
     * Template vs Layout component:
     *  - Template: se recarga cada que cambia de ruta, es decir, es dinamico
     *  - Layout: Componente no dinamicos, que con la capacidad de movernos de ruta
     */
  }, []);
  return <div>{children}</div>;
}
