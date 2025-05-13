---
sidebar_position: 4
---

# Contacts

## Overview
Electrical and/or thermal contacts can be assigned to any edge—or combination of edges—along the perimeter of a region. A single contact may span multiple edges, and contacts can also be distributed across different regions, including junctions between regions. To successfully simulate a device, at least two contacts must be defined. A maximum of eight contacts can be added to a single device model.

## Usage Instructions

To define a contact:
1. From the Menu, select Define -> Contact.
2. Using the cursor, hover the cursor over the geometric edges that make up the contact.
3. When the edge is highlighted in green and the cursor changes to indicate a selectable element, left-click to select the edge.
4. After defining all the contact edges, right-click anywhere to open the properties dialog for the contact.  Use this dialog to set the contact's properties.

## Parameters

### General

<div class="properties-table">

| Name          | Description                                                                                 | Unit       |
|---------------|---------------------------------------------------------------------------------------------|------------|
| `Name`        | A unique identifier for the contact.                                                        | -          |
| `Contact Type`| Used to define how contact will interact with the semiconductor. Options: [Ohmic, Schottky] | -          |
| `Colour`      | Used to define visual colour of the contact (Not used in the solver).                       | -          |

</div>

### Thermal
<div class="properties-table">

| Name                  | Description                                                    | Unit          |
|-----------------------|----------------------------------------------------------------|---------------|
| `Resistance`          | Used to define the thermal resistance.                         | Kelvin/Watt   |
| `Capacitance`         | Used to define the thermal capacitance.                        | Joules/Kelvin |
| `Ambient Temperature` | Used to define the ambient temperature used in the simulation. | Kelvin        |

</div>

### Electrical
<div class="properties-table">

| Name            | Description                                                       | Unit          |
|-----------------|-------------------------------------------------------------------|---------------|
| `Type`          | Used to define the thermal resistance. Options: [Ohmic, Schottky] | Kelvin/Watt   |
| `Barrier`       | If image force barrier lowering is included at a Schottky contact, then set to On. Options: [On, Off] | Joules/Kelvin |
| `Material`      | Used to define the ambient temperature used in the simulation.    | Kelvin        |
| `Work Function` | Work function of the contact material. Used to calculate the barrier height for a Schottky diode or the flat-band voltage for an oxide contact. | Kelvin/Watt   |
| `P Richardson`  | If set to a non-zero, the value is used as the Richardson constant to calculate the thermionic emission current for holes.     | - |
| `N Richardson`  | If set to a non-zero, the value is used as the Richardson constant to calculate the thermionic emission current for electrons. | - |
| `Diode Alpha`   | Coefficient used for calculating dipole lowering of Schottky barrier height. | - |

</div>