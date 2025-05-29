---
title: "Transient"
sidebar_position: 2
---
# Transient Sources
## Overview
Used when performing a time-dependent simulation. These components provide time-varying current or voltage sources that drive a circuit with a defined waveform over time. They are ideal sources, meaning their output is defined entirely by the specified waveform, regardless of the connected load.

There are four types of transient waveforms namely:

1. Piecewise Linear (PWL) Waveform.
    - Allows the definition of custom, non-periodic waveforms by specifying a series of time-value pairs, creating a piecewise linear signal. This is useful for complex waveforms that cannot be captured by simple sine, triangle, or square waves.
1. Sine Wave.
    - Generates a sinusoidal current or voltage signal.
1. Triangle Wave.
    - Generates a linear, periodic triangular waveform.
1. Rectangle Wave.
    - Generates a square wave with programmable high and low states, as well as on/off times.

## Parameters
### PWL
<div class="properties-table">

| Name               | Description                                                                    | Unit       |
|--------------------|--------------------------------------------------------------------------------|------------|
| `Times`            | A list of time points defining the waveform.                                   | seconds    |
| `Values`           | A list of corresponding voltage or current values at each specified time point.| V or A     |
| `Number of Cycles` | The total number of cycles of the waveform the source outputs before stopping. | -          |

</div>

### Rectangle
<div class="properties-table">

| Name                  | Description                                                                                 | Unit    |
|-----------------------|---------------------------------------------------------------------------------------------|---------|
| `Min Voltage/Current` | The lower level of the rectangular waveform.                                                | V or A  |
| `Max Voltage/Current` | The upper level of the rectangular waveform.                                                | V or A  |
| `Frequency`           | The number of cycles the waveform completes per second.                                     | Hz      |
| `Theta1`              | The phase angle at which the waveform begins rising from the minimum to the maximum value.  | Degrees |
| `Theta2`              | The phase angle at which the waveform reaches its maximum value.                            | Degrees |
| `Theta3`              | The phase angle at which the waveform begins falling from the maximum to the minimum value. | Degrees |
| `Theta4`              | The phase angle at which the waveform returns to its minimum value.                         | Degrees |
| `Number of Cycles`    | The total number of cycles of the waveform the source outputs before stopping.              | -       |

</div>

### Sine
<div class="properties-table">

| Name                  | Description                                                                            | Unit    |
|-----------------------|----------------------------------------------------------------------------------------|---------|
| `Max Voltage/Current` | The peak amplitude of the sine waveform.                                               | V or A  |
| `Frequency`           | The number of cycles the waveform completes per second.                                | Hz      |
| `Theta`               | The phase angle that determines the initial position of the waveform within its cycle. | Degrees |
| `DC Component`        | A constant offset added to the entire waveform, shifting it vertically.                | V or A  | 

</div>

### Triangular
<div class="properties-table">

| Name                  | Description                                                                    | Unit    |
|-----------------------|--------------------------------------------------------------------------------|---------|
| `Min Voltage/Current` | The lower level of the triangular waveform.                                    | V or A  |
| `Max Voltage/Current` | The upper level of the triangular waveform.                                    | V or A  |
| `Frequency`           | The number of cycles the waveform completes per second.                        | Hz      |
| `Theta Start`         | The phase angle that determines the initial point within the waveform's cycle. | Degrees |

</div>

## Usage Instructions

:::tip
For instructions on adding a component to the simulation circuit, click [here](../introduction#adding-a-component-to-the-simulation-circuit).
:::

<p align="center">
  <img src="/img/circuit-simulator/sources/transient/01.png" />
</p>

The steps below show how to configure the component effectively.

### Adding Points 
- Click `Add Point` to add individual points, each point is a time-voltage or time-current value.
- Alternatively, you can `Import` a list of values from an external CSV file.

### Remove Entries
- Select a value from the list and left-click the cell to modify it's value.
- Use `Delete Point` to remove a selected entry.
- Use `Clear All` to remove all values from the list.

### Adjust the Number of Cycles
- To adjust the number of cycles for the waveform, edit the value in the text box.

### Apply the Configuration
- Once all parameters are set, click `OK` to save the changes.  
- Click `Cancel` to discard any changes and close the window.