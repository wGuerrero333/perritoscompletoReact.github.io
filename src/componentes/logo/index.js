import * as React from "react"
import { SvgStyled } from "./style"

// Este es JSX en una etiquta svg, que se le aplico styled
export const Logo = (props) => (
  <SvgStyled
    width={360.162}
    height={131.6}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="69.919 9.2 360.162 131.6"
    style={{
      background: "#7493bd",
      "--darkreader-inline-bgimage": "initial",
      "--darkreader-inline-bgcolor": "#385276",
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <filter
        id="a"
        x="-100%"
        y="-100%"
        width="300%"
        height="300%"
        primitiveUnits="objectBoundingBox"
      >
        <feFlood floodColor="#e10267" result="flood" />
        <feComposite
          operator="in"
          in="flood"
          in2="SourceAlpha"
          result="flood-in"
        />
        <feImage
          width="100%"
          height="100%"
          x={0}
          y={0}
          preserveAspectRatio="none"
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMTE5NDkxNTc3MTQ4NDRweCIgaGVpZ2h0PSI4Mi4wNTg4MjI2MzE4MzU5NHB4IiB2aWV3Qm94PSIwIDAgMjUwLjExOTQ5MTU3NzE0ODQ0IDgyLjA1ODgyMjYzMTgzNTk0Ij4KPGRlZnM+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJyZWZsZWN0LWdyYWRpZW50IiB4MT0iMCIgeDI9IjAiIHkxPSIwIiB5Mj0iMSI+CiAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9InJnYmEoODUuNTk1MjM4MDk1MjM4MDklLDQwLjQ0NzY0OTA4MjI3NDQyNCUsNy45NDU4MjIxMDI0MjU4ODElLDAuODU1KSIgc3RvcC1vcGFjaXR5PSIwLjAiLz4KICAgIDxzdG9wIG9mZnNldD0iMC4zIiBzdG9wLWNvbG9yPSJyZ2JhKDg1LjU5NTIzODA5NTIzODA5JSw0MC40NDc2NDkwODIyNzQ0MjQlLDcuOTQ1ODIyMTAyNDI1ODgxJSwwLjg1NSkiIHN0b3Atb3BhY2l0eT0iMC4wIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9InJnYmEoODUuNTk1MjM4MDk1MjM4MDklLDQwLjQ0NzY0OTA4MjI3NDQyNCUsNy45NDU4MjIxMDI0MjU4ODElLDAuODU1KSIgc3RvcC1vcGFjaXR5PSIwLjkiLz4KICA8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxwYXRoIGQ9Ik0wIDAgTDAgMzYuOTI2NDcwMTg0MzI2MTcgUTEyNS4wNTk3NDU3ODg1NzQyMiA1My4zMzgyMzQ3MTA2OTMzNjQgMjUwLjExOTQ5MTU3NzE0ODQ0IDM2LjkyNjQ3MDE4NDMyNjE3IEwyNTAuMTE5NDkxNTc3MTQ4NDQgMCBaIiBmaWxsPSJ1cmwoI3JlZmxlY3QtZ3JhZGllbnQpIi8+Cjwvc3ZnPg=="
          result="image"
        />
        <feComposite
          operator="in"
          in="image"
          in2="SourceAlpha"
          result="image-in"
        />
        <feGaussianBlur in="flood-in" stdDeviation="0.003 0.03" result="blur" />
        <feOffset in="blur" dy={0.03} result="offset" />
        <feComponentTransfer in="offset" result="comp">
          <feFuncA type="linear" slope={0.5} />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="comp" />
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="image-in" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        d="M56.88-41.34V0h-8.19v-26.69L34.28-1.34q-.53.96-1.48 1.47-.96.5-2.05.5-1.06 0-1.98-.5-.93-.51-1.46-1.47L12.84-26.69V0H4.72v-41.34q0-1.41.83-2.5.83-1.1 2.17-1.47.66-.16 1.31-.11.66.04 1.27.28.61.23 1.11.66.5.42.84 1.01l18.5 32.16 18.5-32.16q.72-1.19 1.98-1.69 1.27-.5 2.65-.15 1.31.37 2.15 1.47.85 1.09.85 2.5Zm16.78-6.72v7.34h-8.13v-7.34h8.13Zm0 14.28V0h-8.13v-33.78h8.13Zm40.43 22.37q0 2.1-.53 3.77t-1.4 2.94q-.88 1.26-2.03 2.15-1.16.89-2.43 1.46-1.26.56-2.56.82-1.3.27-2.45.27h-22v-8.13h21.94q1.65 0 2.5-.84.84-.84.84-2.44-.16-3.25-3.28-3.25h-12.6q-2.68 0-4.56-.93-1.87-.94-3.05-2.35-1.17-1.4-1.68-3.03-.52-1.62-.52-3.03 0-2.72.97-4.58.97-1.86 2.44-3.01 1.47-1.16 3.19-1.68 1.71-.51 3.21-.51h19.97v8.12h-19.9q-.63 0-.99.14t-.53.38q-.17.23-.2.5-.03.26-.03.51.03.5.18.79.16.28.39.4.24.13.54.14.29.02.57.02h12.6q3.12 0 5.31 1.12 2.19 1.13 3.53 2.83 1.35 1.7 1.95 3.7.61 2 .61 3.72Zm13.94-36.65v7.34h-8.12v-7.34h8.12Zm0 14.28V0h-8.12v-33.78h8.12Zm37.69 0v8.12h-18.38v-8.12h18.38Zm0-14.66v8.13h-18.31q-1.66 0-2.5.83-.85.82-.85 2.42V0h-8.12v-37.06q0-2.1.53-3.75.53-1.66 1.42-2.92.89-1.27 2.05-2.16 1.15-.89 2.42-1.45 1.27-.57 2.55-.83 1.28-.27 2.43-.27h18.38Zm42.25 14.66v29.69q0 .87-.31 1.62-.32.75-.86 1.3-.55.54-1.28.86-.74.31-1.58.31h-18.38q-1.5 0-3.2-.34-1.7-.35-3.36-1.11-1.66-.77-3.2-1.94-1.55-1.17-2.71-2.84-1.15-1.68-1.86-3.86-.7-2.19-.7-4.94v-18.75h8.13v18.75q0 1.59.54 2.86.55 1.26 1.49 2.17.94.91 2.2 1.39 1.27.48 2.74.48h14.21v-25.65h8.13Zm40.28 22.37q0 2.1-.53 3.77t-1.41 2.94q-.87 1.26-2.03 2.15-1.15.89-2.42 1.46-1.27.56-2.56.82-1.3.27-2.46.27h-22v-8.13h21.94q1.66 0 2.5-.84.85-.84.85-2.44-.16-3.25-3.29-3.25h-12.59q-2.69 0-4.56-.93-1.88-.94-3.05-2.35-1.17-1.4-1.69-3.03-.51-1.62-.51-3.03 0-2.72.97-4.58.97-1.86 2.43-3.01 1.47-1.16 3.19-1.68 1.72-.51 3.22-.51h19.97v8.12h-19.91q-.62 0-.98.14t-.53.38q-.17.23-.21.5-.03.26-.03.51.03.5.19.79.16.28.39.4.24.13.53.14.3.02.58.02h12.59q3.13 0 5.32 1.12 2.18 1.13 3.53 2.83 1.34 1.7 1.95 3.7.61 2 .61 3.72Z"
        fill="#0740f7"
        style={{
          "--darkreader-inline-fill": "#0633c6",
        }}
        transform="translate(123.515 99.535)"
      />
    </g>
  </SvgStyled>
)
