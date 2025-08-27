---
id: release-notes
title: Release Notes
sidebar_position: 0
---

Below lists the changes to each version of Aquarius.
Not all bug fixes are listed as many minor bugs are fixed each release.
All new features and major bug fixes are listed.

### 0.1.24

##### New Features:
- Non-linear inductor added.
- `Help` Button added to the Menu Bar in the Main Window with link to user manual and updates check.
- SWITCH component added.

###### Bug Fixes:
- Transient Voltage and current source bugs fixed.
- Y-axis Labels improved in visualiser plots.
- Capacitance bug fixed for capacitor component.

### 0.1.23

##### New Features:
- Added support for transient waveforms: sine, triangle, and rectangle.
- Introduced a two-coil transformer component.

##### Bug Fixes:
- Resolved an issue with writing numerical values to .res files when using quadruple precision.
- Fixed a bug where Zener diode properties were not saved correctly.

### 0.1.22

##### New Features:
- Added DC Current Source to the circuit editor.
- Implemented RESTART functionality to resume simulations from a previous simulation.
- Solver now outputs numerical values in scientific notation for improved readability and precision.

##### Bug Fixes:
- Fixed a crash that occurred when plotting contour or line cut data.

### 0.1.21

##### New Features:
- The UI now displays the voltage at each source when a case is selected in the results visualizer.
- The solution file now retains the numerical precision setting from the solver options.
- Double-clicking on a region now opens the Region Properties window.
- Doping at all nodes is automatically updated when doping window properties are modified, without requiring re-meshing.
- Improved file readers to prevent application crashes when loading corrupted files.

##### Bug Fixes:
- Resolved an issue with visualizing component values (resistance, capacitance, etc.).
- Fixed a bug related to reading IV trace contact names.

### 0.1.20

##### New Features:  
- Added ability to specify a constant generation rate for each semiconductor regions in the device model.
- Start from initial condition now working for Steady-State simulations.
- Mesh generator has the option to automatically refine based on a distance from the oxide interface.

### 0.1.19

##### New Features:  
- Added ability to refine the mesh elements based open a nodes distance from the metallurgical junction.
- Added additional compatibility checks, when using the start from initial condition command.

##### Bug Fixes:
- Fixed issue with net names not saving correctly.
- Fixed contour plot, so that new colour bar does not appear when a new plot is created.
- Fixed error in boundary conditions for hetero-junctions.
- Fixed solver output formatting for DC Simulations with Bias Points > 9999.

### 0.1.18

##### New Features:  
- Enabling users to manually set the axis limits (X Min, X Max, Y Min, Y Max) on X/Y plots by typing values into a popup dialog box.
- Added the functionality to apply the user defined profiles to mesh nodes.

### 0.1.17

##### New Features:
- Height of drop box for plot variables selection extended to show more values.
- Zener diode component added.
- Work function automatically updates when specific contact materials are selected.
- Added the ability to move the location of the legend in plots.

##### Bug Fixes:
- Updated the mesh grid line intersection algorithm to enable graded spacing lines.
- Fixed axis labels bug on external plots.
- Fixed name and value label visibility for all circuit components.
- Fixed bug with adding new license keys when the old key expires.

### 0.1.16

##### Bug Fixes:
- Fixing bug when reading in long string of bias points.

### 0.1.15

##### New Features:
- Add button for panning, zoom, etc to results visualiser

### 0.1.14

##### New Features:
- Plot variable no longer resets when plotting Energy Band Diagram
- The solver output window is now re-sizeable

### 0.1.13

##### New Features:
- Users can now use transient source (both voltage and current) in simulations.

##### Bug Fixes:
- The maximum number of bias points has been increased to 20,000

### 0.1.12

##### New Features:
- Users can now use `Add To Plot` button in Cut Line Plot
- Users can now plot multiple results files within the results Visualiser

##### Bug Fixes:
- Case File overflow issue partially fixed
- Single values can now be used in voltage sources without errors

### 0.1.11

##### New Features:
- 8byte (double precision) and 16byte (quadruple precision) solver variants now available.
- The default case file output type changed to binary to reduce file size.

### 0.1.10

##### New Features:
- Improvements to mesh status user interface.

##### Bug Fixes:
- Fixed bug related to mesh properties dialog window.

### 0.1.9

##### New Features:
- Added import of voltage source bias points using .csv file. 
- Added a button to order bias points.
- Added code to allow users to plot transient result files.

##### Bug Fixes:
- Issues with specifying bias range of values has been fixed.

### 0.1.8

##### New Features:
- Grid line visibility can be turned ON/OFF.

##### Bug Fixes:
- Issues with specifying negative bias points has been fixed.

### 0.1.7

##### Bug Fixes:
- Issues with defining 'upwards' doping windows has been fixed.

### 0.1.6

##### Bug Fixes:
- Issues with properties windows being open blocking other windows within the GUI has been fixed.

### 0.1.5

##### New Features:
- Shockley-Read-Hall specifiable windows are now available.
- SDM files can now be opened in the results visualizer. They can be opened directly from the device editor, from the main window, or from inside a visualizer window.
- A button has been added to allow users to draw a zoom-area rectangle in the device editor.
- Users can now import and export material properties, as well as the full material library.
- The curve tracer has now been added to the circuit editor.

##### Bug Fixes:
- Issues with log scaling for line plots have been fixed.
- Default material properties have been updated.
- The issue preventing users from interacting with other parts of the app while a simulation is running has been fixed.

### 0.1.4

##### New Features:
- Diode component added to Circuit Simulator.
- Added the ability to use the `esc` key to cancel region, window and contact definitions in the Device Editor.
- Added button to Device Editor tool bar to allow the user to pan across the device using the cursor and left mouse button.

##### Bug Fixes:
- Added a check to see if Aquarius is running and prompting the user to shutdown the app before uninstalling.
- Fixed bug which was making regions 'unclick-able'.
- Fixing net name definition bugs

### 0.1.3

##### New Features:
- Plot variables are now listed alphabetically by name.
- User has the ability to export simulation log files.

##### Bug Fixes:
- Fixing plot variable units.

### 0.1.2
- Automatic fit content to scale when loading a sdm file.
- Zoom In, Out, Fit to content buttons added for Device Editor.
- View Mesh button now is able to display the .sdm file mesh when a user loads an sdm file.
- Minor bugs fixes for post processor.

### 0.1.1
- First release.