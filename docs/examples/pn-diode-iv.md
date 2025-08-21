---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# PN Diode

## 1. Overview
In this worked example, a simple symmetrical PN junction diode is modelled and analysed to illustrate the fundamental workflow of diode simulation in a semiconductor device environment. The device structure consists of a uniformly doped silicon p-region and n-region, each with equal doping concentrations. The device cross-sectional area and region lengths are specified, and ideal ohmic contacts are applied at the anode and cathode.

An analytical current–voltage (I–V) characteristic is derived using the Shockley diode equation, which requires evaluation of the reverse saturation current $Is$ from fundamental semiconductor transport relations. This involves calculating minority carrier diffusion coefficients and diffusion lengths based on carrier mobility and lifetime, together with the intrinsic carrier concentration of silicon.

The analytical model provides a baseline for expected diode behaviour, including exponential forward conduction and saturation in reverse bias. This worked example demonstrates both the physics behind diode operation and the practical steps required to set up and validate a PN diode simulation in the Aquarius TCAD environment, serving as a foundation for more advanced semiconductor devices.

## 2. Parameters

**More parameters need be added here...**

| Parameter             | Symbol       | Value               | Unit            | Description                              |
|-----------------------|--------------|---------------------|-----------------|------------------------------------------|
| Length                | $L$          | $2 \times 10^{-4}$  | cm              | Distance between the two contacts.       |
| Width                 | $W$          | $2 \times 10^{-5}$  | cm              | Depth of the device.                     |
| Depth                 | $D$          | $1 \times 10^{-4}$  | cm              | Z dimension thickness of the device.     |
| Donor Doing           | $N_D$        | $1 \times 10^{-16}$ | cm$^{-3}$       | Uniform donor concentration.             |
| Acceptor Doing        | $N_DA$       | $1 \times 10^{-16}$ | cm$^{-3}$       | Uniform acceptor concentration.          |
| Doping Concentration  | $N_D$        | $1 \times 10^{-16}$ | cm$^{-3}$       | Uniform donor concentration.             |




## 3. Analytical Model
### 3.1. Ideal Diode Equation

For an ideal diode, the current–voltage relation is given by:  

$$
I = I_s \left( e^{\tfrac{qV}{kT}} - 1 \right)
$$

Where: 
- $I$ = Diode current (A)  
- $I_s$ = Reverse saturation current (A)  
- $V$ = Applied bias voltage (V)  
- $q$ = Elementary charge (C)
- $k$ = Boltzmann constant
- $T$ = Absolute temperature (K)

---

In forward bias ($V>0$), the current rises exponentially with voltage. In reverse bias ($V<0$), the current saturates at $I_s$. Because no resistance is included, the exponential law holds across the full bias range without deviation.

### 3.2. Reverse Saturation Current

The reverse saturation current arises from minority carrier diffusion across the junction and is given by:  

$$
I_s = q A \left( \frac{D_p n_i^2}{L_p N_D} + \frac{D_n n_i^2}{L_n N_A} \right)
$$

Where:
- $q$ = Elementary charge (C)
- $A$ = Cross-sectional area (cm²)
- $D_p$ = Hole diffusion coefficient (cm²/s)
- $D_n$ = Electron diffusion coefficient (cm²/s)
- $L_p$ = Hole diffusion length (cm²/s)
- $L_n$ = Electron diffusion length (cm²/s)
- $N_A$ = Acceptor concentration (cm⁻³)
- $N_D$ = Donor concentration (cm⁻³)
- $n_i$ = Intrinsic carrier concentration (cm⁻³)
- $T$ = Absolute temperature (K)

---

$D_p$ and $D_n$ are related to carrier mobilities:  

$$
D = \mu \frac{kT}{q}
$$


$L = \sqrt{D \tau}$, where $\tau$ is the minority carrier lifetime.

---

A simple analytical model for the ideal PN diode was implemented in Python using the above equations. The resulting current–voltage characteristic is shown below. In later sections, this analytical result will be compared with TCAD simulation output to verify consistency between the theoretical model and device-level simulation.

**Insert image here...**

## 4. Simulation using Aquarius

### 4.1. Creating the Device Model

To create a resistor device model in Aquarius, follow the steps below.