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


## 2. Parameters

- **Note:** some of the parameters in this subsection were calculated using the parameters from the PN diode example.

| Parameter                          | Symbol          | Value                   | Unit       | Description                                                                             |
|------------------------------------|-----------------|-------------------------|------------|-----------------------------------------------------------------------------------------|
| Acceptor Doping                    | $N_A$           | $1 \times 10^{16}$     | cm$^{-3}$  | P region acceptor concentration.                                                        |
| Donor Doping                       | $N_D$           | $1 \times 10^{16}$     | cm$^{-3}$  | N region donor concentration.                                                           |
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

Now it will be shown how to produce the necessary plots in order to find the depletion width for different voltages. This section assumes knowledge from the **Resistor** and **PN diode** examples. In this subsection, two example methods of how to find the depletion width will be covered.

### 3.2.1. Producing Graphs

- The first data set will be net charge plotted against distance across the PN diode produced under **Examples**

- To start, go to `Open Results Visualiser` after having opened Aquarius and select the .sdm file containing the circuit and PN diode example. In this example, the file is called **pn_diode_iv** 

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
- Repeat the above steps but under the option **Case Number**, the voltage can be changed. In this example, 0.5 V was selected.

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/02-set-net-charge/06-change-voltage-on-same-graph.png')}/>
</p>

- Next select `Add to Plot`, this will plot the lines on the same graph and make it easier to see the difference in the graphs when the voltage is increased.
- Note that on the plot in the key on the bottom right hand side, the case number refers to which voltage is being used, here [case101] = 0.5V

Figure 1:

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/02-set-net-charge/08-showing-both-plots-net-charge.png')}/>
</p>

<p>
The next example graph that will be produced will be carrier concentration plotted against distance across the PN diode for each possible carrier, electrons and holes. Both examples shown can be used to get the depletion width, the method will be shown in the next sub-section.
</p>

- Select `Cut Line Plot` to open a new tab for this graph.
- Choose **Electron Concentration** this time and repeat previous steps to produce this graph of electron concentration against distance.
 
<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/03-set-carrier-concentration/01-set-electron-concentration.png')}/>
</p>

- Now carry out these steps once more but select **Hole Concentration** under the **Variable Plot**. Add this line to the same graph. 
- In order to get the depletion width, it is needed to plot **Electron Concentration** against distance and hole concentration against distance. These can be plotted with an applied voltage of your choice.

Figure 2:

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/03-set-carrier-concentration/05-show-both-plots')}/>
</p>

### 3.2.2. Interpreting the data

- As it can be seen in the previous sub-section, for Figures 1 and 2, as the applied voltage increases, the points on both converge towards the centre of the graph. This can be seen more clearly in the figure bellow which plots net charge against distance for voltages 0.0 - 0.7V in steps of 0.1V. 

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/04-Interpreting-the-Data/01-example-of-voltage-effecting-depletion-width-graph-')}/>
</p>

- Here it can be clearly seen that as the applied bias increases the plot points converge to the centre of the graph.

- It's known the PN diode from **Examples** was used to produce data in this section. Considering the doping was even for both regions of the diode and the dimensions of the regions were identical, the depletion region formed will be symmetrical and in the centre of the diode.
- The equation for depletion width assumes a perfect system and does not take into account the fact that there are distributions of of charge as you go towards from one end of the diode to the other. In a perfect system, the change in charge concentration or net charge would be sudden and graphs produced would be a step function.

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/04-Interpreting-the-Data/02-step-function-carrier-concentration-')}/>
</p>

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/04-Interpreting-the-Data/03-step-function-net-chrge-')}/>
</p>

<p>
The graphs above show you how the realistic graph from the simulation varies from what the graph would look like according to the ideal equations. Taking the net charge graph for example, the ideal graph cuts through the simulated graph exactly in the middle of where the net charge starts to drop, in this case approximately at $5 \times 10^{15}$ . This is because this centre value would be where the average position accross the diode at which the charge would drop. The step function allows you to clearly see where the depletion region lies in this example. This same reasoning applies to the carrier concentration graph.
</p>

<p>
The depletion width can be extracted fairly easily using the logic explained in the bullet point above. For the carrier concentration graph, take the two points at which the verticle lines cut the graphs and subtract them from each other. For the net charge graphs, take the points at which the two verticle lines cut the graph either side of the central verticle line. Both of these methods will give you the depletion width.
</p>


- Depletion width values were calculated from data produced in Aquarius and then plotted. Note the values displayed on the table have been rounded to 4 significant figures.

|Applied Bias (V) | Theoretical Depletion Width (cm) | Aquarius Depletion width (m) |
|-----------------|----------------------------------|------------------------------|
| 0.00            | $4.306 \times 10^{-5}$           | $3.751 \times 10^{-5}$       |
| 0.05            | $4.153 \times 10^{-5}$           | $3.751 \times 10^{-5}$       |
| 0.10            | $3.995 \times 10^{-5}$           | $3.321 \times 10^{-5}$       |
| 0.15            | $3.830 \times 10^{-5}$           | $3.100 \times 10^{-5}$       |
| 0.20            | $3.657 \times 10^{-5}$           | $3.100 \times 10^{-5}$       |
| 0.25            | $3.475 \times 10^{-5}$           | $2.891 \times 10^{-5}$       |
| 0.30            | $3.284 \times 10^{-5}$           | $2.695 \times 10^{-5}$       |
| 0.35            | $3.081 \times 10^{-5}$           | $2.500 \times 10^{-5}$       |
| 0.40            | $2.863 \times 10^{-5}$           | $2.317 \times 10^{-5}$       |
| 0.45            | $2.627 \times 10^{-5}$           | $2.134 \times 10^{-5}$       |
| 0.50            | $2.369 \times 10^{-5}$           | $1.794 \times 10^{-5}$       |
| 0.55            | $2.078 \times 10^{-5}$           | $1.480 \times 10^{-5}$       |
| 0.60            | $1.740 \times 10^{-5}$           | $9.410 \times 10^{-6}$       |
| 0.65            | $1.317 \times 10^{-5}$           | $5.857 \times 10^{-6}$       |
| 0.70            | $6.635 \times 10^{-6}$           | $1.471 \times 10^{-6}$       |

- The data from the table above can be shown in the graph bellow:

<p align="center">
  <img src={useBaseUrl('img/examples/depletion-width/producing-graphs/04-Interpreting-the-Data/04-depletion-width-vs-voltage-')}/>
</p>

- It is apparent that the graphs have an offset

**STILL NEED TO FIND OUT WHY THE GRAPHS ARE DIFFERENT EVEN IF THEY FOLLOW THE SAME TREND**


























