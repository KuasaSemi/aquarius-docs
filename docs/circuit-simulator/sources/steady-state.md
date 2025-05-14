---
title: "Steady State (DC)"
sidebar_position: 1
---
# Steady State Sources
## Overview
Used when performing a steady-state simulation. This component provides a steady-state (DC) source that can supply either a fixed voltage or current between its two terminals. It is an ideal component, meaning it maintains a constant output regardless of the connected load.

:::tip
For instructions on adding a component to the simulation circuit, click [here](../introduction#how-to-add-a-component).
:::

### DC Voltage Source
Provides a fixed potential difference across its terminals with zero internal resistance, described by:

$$
V = V_{source}
$$

### DC Current Source
Provides a fixed current to the circuit with infinite internal resistance, described by:

$$
I = I_{source}
$$

## Parameters
<div class="properties-table">

| Name     | Description                                            | Unit          |
|----------|--------------------------------------------------------|---------------|
| `Name`   | A unique identifier for the component.                 | -             |
| `Values` | A list of voltage or current points for the DC source. | Volts or Amps |

</div>

## Usage Instructions

The DC Source Properties properties window window allows you to configure the parameters for a DC source. 

<p align="center">
  <img src="/img/circuit-simulator/sources/01.png" />
</p>

The steps below show how to configure the component effectively.

### Adding Points 
- Click `Add Value` to add individual points.  
- Use `Add Range` to specify a range of values with a fixed spacing.  
- Alternatively, you can `Import` a list of values from an external CSV file.  

### Organising Points
- Use the `▲` and `▼` buttons to reorder the values in the list.  
- Click `Order List` to automatically sort the values in ascending order.  
- Use `Clear All` to remove all values from the list.  

### Edit or Remove Entries
- Select a value from the list and click ``Edit`` to modify it.  
- Use `Delete` to remove a selected entry.  

### Apply the Configuration
- Once all parameters are set, click `OK` to save the changes.  
- Click `Cancel` to discard any changes and close the window.