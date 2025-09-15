---
sidebar_position: 6
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Physical Models
A range of physical models are available to be used in the simulation. The physical models implemented in the simulator are fully configurable.
To edit or view the physical models properties:
1. From the main menu, select Model -> Model Selection.

<p align="center">
  <img src={useBaseUrl('img/device-editor/physical-models/01.png')} width="300"/>
  <img src={useBaseUrl('img/device-editor/physical-models/02.png')} width="300"/>
  <img src={useBaseUrl('img/device-editor/physical-models/03.png')} width="300"/>
</p>

## Parameters

## General

<div class="properties-table">

| Name       | Description                                                  | Unit       |
|------------|--------------------------------------------------------------|------------|
| `Refmat`   | Reference Material. The baseline material used to define reference energy levels in simulations. | -         |
| `Temp`     | Temperature. Ambient temperature for the simulation          | Kelvin  |

</div>

## Mobility
### Low Field Mobility
Users can set low field mobility as constant, lattice, impurity, or carrier-carrier:

- Constant Model: Mobility is fixed to the value specified in the properties command.
- Lattice Model: Accounts for mobility reduction due to increased lattice collisions at higher temperatures.
- Impurity Model: Considers mobility reduction due to additional collisions caused by impurities.
- Carrier-Carrier Model: Similar to the impurity model but also accounts for carrier concentration effects, which are crucial at high injection levels.

Note: If the high-field model is selected, the low-field mobility model will feed into it. Otherwise, the selected mobility model will be used in the simulation.
<div class="properties-table">

| Name       | Description                                                  | Unit       |
|------------|--------------------------------------------------------------|------------|
| `Const_Mob`| Reference Material. The baseline material used to define reference energy levels in simulations. | -         |
| `Temp`     | Temperature. Ambient temperature for the simulation.          | Kelvin  |

</div>

### High Field Mobility
Users can set high field mobility as none, e_field or j_field.
The e_field or j_field models are used to select the high-field mobility model, which can be based on either the electric field magnitude or the magnitude of the field in the direction of the current.

### High Field Calculation
Users can set as edge or element. 
Used to determine how the high field mobility field is calculated. This will either use the values along an element edge or calculate the field based on the whole element.

### Surface Mobility
Users can set as yes or no.
Used to select surface mobility along oxide semiconductor interfaces. This model only affects those edges that actually lie along the interface.

<div class="properties-table">

| Name       | Description                                                  | Unit       |
|------------|--------------------------------------------------------------|------------|
| `Surf_Mob`| Used to select surface mobility along oxide semiconductor interfaces. Options: [On, Off] | -         |

</div>

## Recombination
### SRH (Shockley Read Hall)

<div class="properties-table">

| Name       | Description                                                  | Unit       |
|------------|--------------------------------------------------------------|------------|
| `SRH_rec`  | Selects the Shockley Read Hall recombination model. Options: [On, Off] | -         |

</div>

### Auger

<div class="properties-table">

| Name       | Description                                                  | Unit       |
|------------|--------------------------------------------------------------|------------|
| `Auger_rec`| Selects the Auger recombination model. Options: [On, Off] | -         |

</div>


### Direct

<div class="properties-table">

| Name       | Description                                                  | Unit       |
|------------|--------------------------------------------------------------|------------|
| `Dir_rec`| Selects the direct band-to-band recombination model. Options: [On, Off] | -         |

</div>

### Impact Ionisation
Users can set these option to **Off**, **Edge**, or **Element**, but only one can be selected at any time.

<div class="properties-table">

| Name      | Description                                                                 | Unit |
|-----------|-----------------------------------------------------------------------------|------|
| `II_elem` | Selects the Chynoweth impact-ionisation model using full elemental discretisation. Options: [On, Off] | - |
| `II_edge` | Selects the Chynoweth impact-ionisation model based on edge discretisation. Options: [On, Off] | - |
| `OC_elem` | Selects the Okuto–Crowell impact-ionisation model using full elemental discretisation. Options: [On, Off] | - |
| `OC_edge` | Selects the Okuto–Crowell impact-ionisation model based on edge discretisation. Options: [On, Off] | - |

</div>

### Chynoweth Impact Ionisation Model

The electron ($\alpha$) and hole ($\beta$) ionisation coefficients are given by:

$$
\alpha,\;\beta(F) \;=\; A \,\exp\!\left( -\frac{B}{F} \right)
$$

where:

| Symbol | Description | Units | Property |
|--------|-------------|-------|----------|
| $A_p$ | Ionisation coefficient prefactor for holes ($\beta$) | cm⁻¹ | `K_aval_alpha_p` |
| $B_p$ | Field scaling parameter for holes ($\beta$) | V/cm | `K_aval_beta_p` |
| $A_n$ | Ionisation coefficient prefactor for electrons ($\alpha$) | cm⁻¹ | `K_aval_alpha_n` |
| $B_n$ | Field scaling parameter for electrons ($\alpha$) | V/cm | `K_aval_beta_n` |
| $F$   | Electric field | V/cm | – |
| $\alpha$ | Ionisation coefficient (electrons) | cm⁻¹ | computed |
| $\beta$  | Ionisation coefficient (holes) | cm⁻¹ | computed |


### Okuto–Crowell Impact Ionisation Model

The Okuto–Crowell model [1] is used to describe the temperature-dependent impact ionisation coefficients in semiconductors.


The electron ($\alpha$) and hole ($\beta$) ionisation coefficients are given by:

$$
\alpha,\;\beta(F, T) \;=\; 
a \cdot \bigl(1 + c \,(T - 300)\bigr)\cdot F^{\,n} \cdot 
\exp\!\left[ - \left( \frac{b \cdot \bigl(1 + d\,(T - 300)\bigr)}{F} \right)^{m} \right]
$$

where:

| Symbol | Description | Units | Property (holes) | Property (electrons) |
|--------|-------------|-------|------------------|----------------------|
| $a$  | Pre-exponential factor | cm⁻¹ | `OC_a_p` | `OC_a_n` |
| $b$  | Field scaling parameter | V/cm | `OC_b_p` | `OC_b_n` |
| $c$  | Temperature coefficient (prefactor) | 1/K | `OC_c_p` | `OC_c_n` |
| $d$  | Temperature coefficient (field scaling) | 1/K | `OC_d_p` | `OC_d_n` |
| $m$  | Exponent in exponential term | – | `OC_m_p` | `OC_m_n` |
| $n$  | Field-power exponent | – | `OC_n_p` | `OC_n_n` |
| $F$  | Electric field | V/cm | – | – |
| $T$  | Lattice temperature | K | – | – |

## References

[1] Y. Okuto and C. R. Crowell, "Ionization coefficients in semiconductors: A nonlocalized property," *Phys. Rev. B*, vol. 10, no 10, pp. 4284–4296, 1974, doi:10.1103/PhysRevB.10.4284.
