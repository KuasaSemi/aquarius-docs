---
title: "Wiring Circuits"
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview
To build a functional circuit, components must be interconnected using wiring. 
This process establishes the electrical paths that define the circuit's behaviour and signal flow.
Wires are symbolic and have zero resistance.

## Contacts
Components in circuits have a number of electrical contacts. 
When these are not connected they display as white circles. 
For devices, these contacts are labelled with contact names as defined in the device editor (see [Contacts](/aquarius-docs/device-editor/contacts)).
Moving the cursor over a contact will display a cross.

## Adding Wires
Left-click on a contact to begin drawing a wire.

<p align="center">
  <img src={useBaseUrl('img/circuit-simulator/basics/wiring-circuits/01.png')}/>
</p>

Left-click anywhere on the canvas while drawing a wire to create a fixed point in the wire. 
This is useful for routing wires around other components.

<p align="center">
  <img src={useBaseUrl('img/circuit-simulator/basics/wiring-circuits/02.png')}/>
</p>

Left-click on another contact or wire to complete the wire.

<p align="center">
  <img src={useBaseUrl('img/circuit-simulator/basics/wiring-circuits/03.png')}/>
</p>

## Moving Wires
Once a wire is created, the start and end contacts are fixed. Moving the wire is purely visual.
When moving components, wires attached to the component will automatically move to maintain their connections.
Wires can be manually moved by left-clicking and dragging a straight section of wire.

## Deleting Wires

Wires can be deleted by left-clicking the wire to select it and pressing the `delete` key.
