---
sidebar_position: 4
---

# Physical Models
A range of physical models are available to be used in the simulation of the device being defined and can be configured by the user. The available models include:

## Parameters

### General

<div class="properties-table">

| Name       | Description                                                  | Unit       |
|------------|--------------------------------------------------------------|------------|
| `Refmat`   | Reference Material. The baseline material used to define reference energy levels in simulations. | -         |
| `Temp`     | Temperature. Ambient temperature for the simulation          | Kelvin  |

</div>

### Mobility
#### Low Field Mobility
Users can set mobility as constant, lattice, impurity, or carrier-carrier:

- Constant Model: Mobility is fixed to the value specified in the properties command.
- Lattice Model: Accounts for mobility reduction due to increased lattice collisions at higher temperatures.
- Impurity Model: Considers mobility reduction due to additional collisions caused by impurities.
- Carrier-Carrier Model: Similar to the impurity model but also accounts for carrier concentration effects, which are crucial at high injection levels.

Note: If the high-field model is selected, the low-field mobility model will feed into it. Otherwise, the selected mobility model will be used in the simulation.
<div class="properties-table">

| Name       | Description                                                  | Unit       |
|------------|--------------------------------------------------------------|------------|
| `Const_Mob`   | Reference Material. The baseline material used to define reference energy levels in simulations. | -         |
| `Temp`     | Temperature. Ambient temperature for the simulation          | Kelvin  |

</div>