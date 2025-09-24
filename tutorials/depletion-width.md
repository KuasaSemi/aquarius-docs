---
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';


# PN Diode, Depletion Width

## 1. Overview

<p>	In this section, the relationship between the applied voltage and the depletion width of the PN diode produced under **Examples** will be explored. As explained under `Examples` →  `PN diode`, A PN junction diode has three regions: the n-region, the p-region and the depletion region. The depletion region cannot exist without both the n-type and p-type in contact with each other.
</p>

<p>	The depletion region width is dependent on the applied voltage across the diode. The depletion width equation is derived from using Gauss’s law for electric flux. The derivation assumes that the free electrons from the n-type region have diffused into the holes of the p-type region producing a potential difference. This potential difference is known as the **Built-in potential**. Calculations are based off the interactions between the positive and negative ions produced by the diffusion process.
</p>

<p>	An analytical model was produced to display the relationship between the applied voltage across the diode and the depletion width. The goal here being to understand the physics behind a PN junction diode.
</p>

This section will demonstrate how to extract the depletion width from the **Results visualiser** for a given applied voltage.

Anything else…?


## 2. Parameters

- **Note:** some of the parameters in this subsection were calculated using the parameters from the PN diode example.

| Parameter                          | Symbol          | Value                   | Unit       | Description                                                                             |
|------------------------------------|-----------------|-------------------------|------------|-----------------------------------------------------------------------------------------|
| Acceptor Doping                    | $N_A$           | $1 \times 10^{-16}$     | cm$^{-3}$  | P region acceptor concentration.                                                        |
| Donor Doping                       | $N_D$           | $1 \times 10^{-16}$     | cm$^{-3}$  | N region donor concentration.                                                           |
| Temperature                        | $T$             | $300$                   | K          | Temperature of the diode.                                                               |
| Permittivity of semiconductor      | $\varepsilon_s$   |                         | F/m        | How much a material resists an electric field forming in it.                            |
| Permittivity of free space         | $\varepsilon_0$  | $8.854 \times 10^{-12}$ | F/m        | How much a vacuum resists an electric field forming in it.                              |
| Built in potential                 | $V_bi$          | $0.7170236$             | V          | The potential difference naturally occurring across the diode, see why in overview.     |
| Applied voltage                    | $V_a$           |                         | V          | The voltage applied across the diode                                                    |
| Intrinsic carrier coefficient      | $n_i$           |                         | cm$\^{-3}$  | Number density of the electrons in the conduction band and holes in the valence band.   |



## 3. Analytical Model
### 3.1. Ideal equation for depletion width:

<p>The following is the equation for the depletion width and assumes the diode is ideal. The definition of an ideal diode can be found in the PN diode found in **Examples**:</p>

**insert image showing how depletion region forms with brief explanaition, I will make **

$$

W = \sqrt{\frac{2 \, \varepsilon_s}{q} \cdot \frac{N_A + N_D}{N_A N_D} \cdot (V_{bi} - V_a)}

$$

Where:

$W$ = Depletion Width
$Q$ = Electron Charge

The built in potential is calculated by:

$$

V_{bi} = \frac{kT}{q} \ln \left( \frac{N_A N_D}{n_i^2} \right)

$$

Where $n_i$ = intrinsic carrier coefficient

- Note the intrinsic carrier coefficient is the number density of electrons occupying the conduction band and the wholes occupying the covalence band.

#### 3.1.2. Proving the depletion width equation:

<p>	In order to help understand some of the physics that leads to the formation of the depletion region, the equation will now be derived. First, we start with Poisson's equation for electric fields. In the context of the depletion region, we are only interested in the direction that travels perpendicular inside the depletion region. Hence the Poisson equation becomes: </p>

$\frac{d^2V}{dy^2} = \frac{\rho}{\varepsilon_s}$

- Where:
	- $V$ = electric potential
	- $\rho$ = charge density

Now we consider applying this equation to both sides of the PN diode. Let's first of all set up boundary conditions relating to the charge density:

$$
\rho(x) =
\begin{cases}
+qN_D, & 0 < y < y_n \quad \text{(n-side depletion)} \\[6pt]
- qN_A, & -y_p < y < 0 \quad \text{(p-side depletion)} \\[6pt]
0, & \text{elsewhere (neutral regions)}
\end{cases}
$$

- Where:
	- $y_n$ = depletion width into the n-side
	- $y_p$ = depletion width into the p-side

- Note: it is assumed that the depletion width is already formed and that the temperature, acceptor and doner concentrations are all constant.

**CARRY ON PROOF LATER**


## 3.2. Extracting Depletion Width From Aquarius

Now it will be shown how to produce the necessary plots in order to find the depletion width for different voltages. This section assumes knowledge from the **Resistor** and **PN diode** examples. There are a few different graphs that can be used to find the depletion width of a diode in Aquarius. Here, two examples will be covered.

### 3.2.1. Producing Graphs

- The first data set will be net charge plotted against distance across the PN diode produced under **Examples**

- To start, go to `Open Results Visualiser` and select the .sdm file containing the circuit and PN diode example. In this example, the file is called **pn_diode_iv** 

- Once the window has opened select `Cut Line Plot`.

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/01-cut-line-plot.png')}/>
</p>

- Under **Cut Line Plot Settings** set the **Variable to Plot** option to `Net Charge (Nd-Na+p-n)`.

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/02-set-net-charge/01-set-to-net-charge.png')}/>
</p>

- Since the PN diode made in under **Examples** was orientated vertically, we want to set the **Orientation** to verticle. 

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/02-set-net-charge/02-set-verticle-orientation.png')}/>
</p>


- Now the graph can be produced by pressing `New Plot` at the bottom right of **Cut Line Plot Settings**.

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/02-set-net-charge/04-showing-plot-0.0V.png')}/>
</p>

- The graph above is what should be produced following the steps above.
- Repeat the above steps but under the option **Case Number**, select the desired voltage. In this example, 0.5 V was selected.

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/02-set-net-charge/06-change-voltage-on-same-graph.png')}/>
</p>

- Next select `Add to Plot`, this will plot the lines on the same graph and make it easier to see the difference in the graphs when the voltage is increased.

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/02-set-net-charge/08-showing-both-plots-net-charge.png')}/>
</p>

<p>
The next example graph that will be produced will be carrier concentration plotted against distance across the PN diode for each possible carrier, electrons and holes. Both examples shown can be used to get the depletion width, the method will be shown in the next sub-section.
</p>

- Select `Cut Line Plot` to open a new tab for this graph.
- Choose **Electron Concentration** this time and repeat previous steps to produce this g
 





































