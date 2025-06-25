---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Resistor

## Introduction
In this example project, a simple uniformly doped n-type silicon resistor is modeled and simulated to demonstrate the basic workflow of semiconductor device simulation. An analytical resistance is calculated from fundamental semiconductor relations based on geometry, doping concentration, and mobility. The simulation includes geometry definition, doping profile assignment, physical model selection, contact specification, and bias application. The extracted current is used to compute the simulated resistance, and the result is compared with the analytical expectation. This example serves both as a simple validation case for the Aquarius TCAD environment and as an instructional reference for users implementing basic electrical simulations of passive devices.

## Parameters

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/01.png')} width="600"/>
</p>


| Parameter             | Symbol       | Value               | Unit            | Description                              |
|-----------------------|--------------|---------------------|-----------------|------------------------------------------|
| Length                | $L$          | 1                   | cm              | Distance between the two contacts.       |
| Width                 | $W$          | 1                   | cm              | Lateral width of the resistor.           |
| Height                | $H$          | 1                   | cm              | Vertical thickness of the resistor.      |
| Doping Concentration  | $N_D$        | $1 \times 10^{-16}$ | cm$^{-3}$       | Uniform donor concentration.             |
| Carrier Mobility      | $\mu_n$      | 1000                | cm$^{2}$ /V·s   | Nominal electron mobility (constant).    |


## Resistance Formula
The analytical resistance of a uniformly doped semiconductor resistor can be derived from Ohm’s law and the definition of resistivity in terms of semiconductor transport properties. The total resistance $R$ between two terminals of a rectangular resistor is given by:

$$
R = \rho \cdot \frac{L}{A}
$$

Where:  
- $R$ = resistance (Ω)  
- $\rho$ = resistivity of doped silicon (Ω·cm)  
- $L$ = length of the resistor (cm)  
- $A$ = cross-sectional area = width × thickness (cm²)

In a doped semiconductor, the resistivity $\rho$ is related to the doping concentration and carrier mobility as follows:
$$
\rho = \frac{1}{q \cdot \mu \cdot N}
$$

Where:  
- $q$ = elementary charge ($\approx$ $1.6 \times 10^{-19}$ C)
- $\mu$ = carrier mobility (cm²/V·s) 
- $N$ = doping concentration (cm⁻³)

Combining the two equations, the resistance becomes:
$$
R = \frac{L}{q \cdot \mu \cdot N \cdot A}
$$


## Example Calculation
Using the parameter values defined above:
$$
A = W \cdot D = (1.0 \times 10^{-4}) \cdot (1.0 \times 10^{-4}) = 1.0 \times 10^{-8} cm^{2}
$$

Now substitute into the resistance formula:
$$
R = \frac{(1.0 \times 10^{-4})}{(1.6 \times 10^{-19}) \cdot (1000) \cdot (1 \times 10^{-16}) \cdot (1.0 \times 10^{-8})} = \underline{\mathbf{62.5\text{k}\Omega}}
$$