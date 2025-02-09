---
sidebar_position: 3
---

# Material Properties

Aquarius includes a library of commonly used semiconductor and non-semiconductor materials. All materials are fully customisable and can be edited by the user. Additionally, users can save and load their own parameter files for individual materials and the full material library.

To edit or view the material properties:
1. From the main menu, select Model -> Material Library.

<p align="center">
  <img src="/img/04.png" alt="Centered Image" width="800"/>
</p>

2. In the materials library, users can edit, delete, import, and export individual materials as Material Properties (.mat) files or manage the entire library as Material Library (.mlb) files. Users can modify the properties of each material or define entirely new materials.

<p align="center">
  <img src="/img/05.png" alt="Centered Image" width="300"/>
</p>

## Parameters

### General

<div class="properties-table">

| Name        | Description                                                  | Unit       |
|-------------|--------------------------------------------------------------|------------|
| `Semcn`     | Semiconductor material. (1 = Yes, -1 = No)                   | -          |
| `Fixsc`     | Fixed semiconductor. (1 = Single composition, -1 = Variable) | -          |
| `Epslr`     | Relative dielectric constant.                                | -          |
| `Eg`        | Band gap.                                                    | eV         |
| `Affin`     | Electron affinity.                                           | eV         |
| `Mass_p`    | Relative hole effective mass.                                | -          |
| `Mass_n`    | Relative electron effective mass.                            | -          |
| `Lat_const` | Lattice constant.                                            | Angstroms  |

</div>

### Mobility

<div class="properties-table">

| Name         | Description                                                                     | Unit   |
|--------------|---------------------------------------------------------------------------------|--------|
| `Mu_0_p`     | Constant mobility (holes).                                                      | cm²/Vs |
| `Mu_0_n`     | Constant mobility (electrons).                                                  | cm²/Vs |
| `Mu_AlpT_p`  | Temperature coefficient for lattice scattering mobility (holes).                | -      |
| `Mu_AlpT_n`  | Temperature coefficient for lattice scattering mobility (electrons).            | -      |
| `Mu_max_p`   | Maximum mobility (holes), decreases with increasing lattice temperature.        | cm²/Vs |
| `Mu_max_n`   | Maximum mobility (electrons), decreases with increasing lattice temperature.    | cm²/Vs |
| `Mu_min_p`   | Minimum mobility (holes), used in impurity and carrier scattering mobility.     | cm²/Vs |
| `Mu_min_n`   | Minimum mobility (electrons), used in impurity and carrier scattering mobility. | cm²/Vs |
| `Mu_nref_p`  | Reference doping for impurity and carrier scattering mobility (holes).          | cm⁻³   |
| `Mu_nref_n`  | Reference doping for impurity and carrier scattering mobility (electrons).      | cm⁻³   |
| `Mu_alpD_p`  | Coefficient for impurity and carrier scattering mobility (holes).               | -      |
| `Mu_alpD_n`  | Coefficient for impurity and carrier scattering mobility (electrons).           | -      |
| `Mu_vsat_p`  | Carrier saturation velocity at 300K (holes).                                    | cm/s   |
| `Mu_vsat_n`  | Carrier saturation velocity at 300K (electrons).                                | cm/s   |
| `Mu_beta_p`  | Coefficient for field-dependent mobility (holes).                               | -      |
| `Mu_beta_n`  | Coefficient for field-dependent mobility (electrons).                           | -      |
| `Mu_gsur_p`  | Oxide interface mobility reduction factor (holes).                              | -      |
| `Mu_gsur_n`  | Oxide interface mobility reduction factor (electrons).                          | -      |
| `Mu_S_Ec_p`  | Critical electric field for oxide interface mobility model (holes).             | V/cm   |
| `Mu_S_Ec_n`  | Critical electric field for oxide interface mobility model (electrons).         | V/cm   |
| `E_trap`     | Trap energy relative to the intrinsic Fermi-level.                              | eV     |

</div>