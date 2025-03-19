---
sidebar_position: 1
---

# PN Junction

Docusaurus can manage multiple versions of your docs.

## Overview

The Si PN junction is the basis for semiconductor devices like diodes, transistors, and solar cells. The PN junction exhibits key electrical properties, including the ability to allow current to flow in one direction (forward bias) and block current in the opposite direction (reverse bias). A PN junction fundamentally consists of two regions of silicon: one with a p-type doping and the other with n-type doping. At the interface of the two regions, electrons diffuse from the n-type side to the p-type side and holes from the p-type side to the n-type side. This results in the creation of a charge-free region having an electric field which further opposes the carrier diffusion.

## Defining the PN Junction Structure 
### Define the geometry

Open Aquarius software. To create a new device model directly without reference to process model data:
1. From the Main Window, Select New Device Model.

<p align="center">
  <img src="/img/new_device_model.png" alt="Centered Image" width="800"/>
</p>

2.  Click on **New Device Model**. To define a region, select the option of **Define**, then click on **Region** to select the shape of the region. In this example, rectangular region is selected by clicking on **Rectangle**.

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image1.png"/>
</p>

3. Select the area where the p-type semiconductor will be defined by clicking at one corner and dragging it. In this example we have defined a rectangle of width (along x axis) 0.1 um and length (along y axis) 0.2 um. You can specify the exact coordinates of the corners using the pop-up box that follows. Click **OK**.

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image2.png"/>
</p>

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image3_2.png"/>
</p>

4. To define the properties of the region, right click on the region and select **Properties**. Select the desired name, material, doping, etc. Click **OK**. In this example, the name is defined as Region1 and material is Si with a uniform acceptor doping of 1e17 cm<sup>-3</sup>.

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image4.png"/>
</p>

5. Similarly define the region and its properties for the n-type semiconductor as follows. In this example, the n-type region is defined with a rectangle of similar width (along x axis) of 0.1 um and length (along y axis) of 0.2 um as in p-type region. The p-type region is named Region2 and material is again Si with a uniform acceptor doping of 1e17 cm<sup>-3</sup>. You may use different colours for p and n-type regions to make it easy to visualise.

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image5.png"/>
</p>

### Define the mesh parameters

1. Define the grid points at which the solver will solve for electrostatics of the PN junction. Click on **Mesh** and select **Define Mesh Construction Grid**. 

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image6.png"/>
</p>
2. In the window that opens, click **Add** to define new grid lines. Select **Horizontal** orientation. Define the y-coordinates where the grid to be defined along with the **Spacing**. The spacing decides the fineness of the grids. As the spacing becomes smaller, the grid points become more dense. In this example, a fixed interval grids from y=0.2 um to -0.2 um is defined with a spacing of 0.01 um. 

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image7.png"/>
</p>

3. Variable grid spacing can be achieved by adding another set of vertical grid points with different y-coordinates and spacing. To do this, click on **Add** in the **Mesh Construction Window**. Then, enter a different Y1 and Y2 values. For example, in this case Y1=0.05 um and Y2=-0.05 um with spacing of 0.005 um. Click **OK** and then close the **Mesh Construction Window**. Please note that PN junction electrostatics can be solved in 1D. Hence vertical grid lines are not required in this example. 

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image7_2.png"/>
</p>

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image8.png"/>
</p>

### Define the contacts

1. Ohmic contacts need to be defined on the p-side and n-side of the PN junction. These contacts are used for the application of voltage during DC bias. For this, click on **Define** and select **Contact**. 
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image9.png"/>
</p>

2. Place the cursor on the boundary where the contact is to be defined.
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image11.png"/>
</p>

3. Left click on the contact to define its properties like name, metal, type of contact, work function etc. In this example, we have named the contact to p-type region as **Anode** and contact to n-type region as **Cathode**. The type of both contacts are Ohmic with work function of 4.1 eV corresponding to that of Aluminium.
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image12_2.png"/>
</p>

4. Similarly, add the Cathode contact. The contacts can be edited by left clicking on it to select it and then right click on it and select properties.

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image13_2.png"/>
</p>

5. Next, generate the mesh over the defined geometry. Click on **Mesh** and **Generate Finite Element Mesh Model** to form the mesh points over the entire PN junction structure.

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image15.png"/>
</p>

6. Choose the desired mesh properties from the dialogue box. This example uses the default value of 3 for **Number of Iterations** and Net Doping as the **Refinement Variable**. Doping is used for refining since there would be carrier depletion region at the interface of p-type and n-type needing better refinement at the interface. For better refinement, iterations can be increased at the cost of simulation time. Then click **OK**.
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image16.png"/>
</p>

7. The results of the meshing process can be viewed as below. It shows the total number of meshing nodes on which the simulation will be performed. As the mesh density increases, the accuracy will increase. However, the time taken to simulate will also increase. Now, the **Mesh Generation Status** window can be closed.
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image17.png"/>
</p>

8. The device structure after meshing looks like below. The meshed structure file will be saved as .sdm file. This completes the definition of device structure. 
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image19.png"/>
</p>


## Simulating the PN Junction Structure 

### Import the device structure

1. Simulation of the defined PN junction can be performed using the circuit simulator in Aquarius. For this, navigate to the main menu and click on **New Simulation** button. A pop-up window opens asking to create a new **Solution File**. Click **OK**.  
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image20.png"/>
</p>

2. The window for simulating the structure opens up. Here, the circuit can be constructed to be externally applied to the defined PN Junction. To select the previously defined structure of PN Junction, click the **device** icon and drag it into the workspace.

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image22.png"/>
</p>
3. Select the .sdm of the PN Junction's structure saved in the previous session and click **OK**.
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image24.png"/>
</p>
4. Change the orientation of the device as per the requirements using **Control+R**
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image25.png"/>
</p>

### Define the voltage source

1. Place the DC voltage source by clicking on the icon and dragging it to the desired location.
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image27.png"/>
</p>

2. Connect the components using wires by simply joining the dots on the individual components. Use **Spacebar** to swap between the wire's orientation. 
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image28.png"/>
</p>

3. Introduce the reference voltage into the cirucit and connect it with a wire.
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image31.png"/>
</p>


4. Introduce the bias values for the DC source by double clicking the DC source. Press **Add Value** and enter a desired voltage bias, say 0 V. 
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image33.png"/>
</p>

5. Save the circuit with .sol extension. Press **OK**
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image32.png"/>
</p>

6. Run the simulation using the blue play button which performs the steady-state simulations. The log of the simulation can be viewed in the window that opens. Close the window and **save** it. This simulation has created the .res file for visualization which is done in the next session. 
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image34.png"/>
</p>

## Visualising the result of simulation

1. The results generated by applying the a constant bias in the previous session can be visualised using Aquarius's Visualiser. Open the Visualiser from the main menu using **Open Results Visualiser** button. 
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image35.png"/>
</p>

2. Open the .res file which has the results of simulation saved in it.
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image36.png"/>
</p>

3. Selecting the .res will open up the visualiser window as below. **Contour Plot** and **Cut Line Plot** are used to visualise the device's intrinsic material paramters. The **External Plot** helps to visualise the response to the external sources like I-V and C-V. 

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image37.png"/>
</p>

4. Click on **Cut Line Plot** and select appropriate options. For example, device file (.sdm), the simulation file (.res), orientation of the cut line, variable to be plotted etc. Click on **New Plot**. Shown below are the plots like new doping, energy band diagram etc.

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image39.png"/>
</p>
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image40.png"/>
</p>

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image41.png"/>
</p>

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image42.png"/>
</p>



## Simulating I-V characteristics

### Define the voltage sweep
1. PN junction current-voltage (I-V) measurements can be plotted using Aquarius. To do this, open the .sol file from the main menu. Click on **File** and select the **.sol** file. 

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image43.png"/>
</p>
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image44.png"/>
</p>

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image45.png"/>
</p>


2. Double click on the DC Source and **Add Range**. Enter the **Start Voltage**, **End Voltage** and the **Steps**. Click **OK**.

<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image46.png"/>
</p>


<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image47.png"/>
</p>

### Run the simulations

3. The simulation being run can be seen in the log windows. After the completion, press **Close** and save the file from the main window.
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image49.png"/>
</p>

4. Open the visualiser as earlier with the same .res file
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image50.png"/>
</p>
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image51.png"/>
</p>

5. Click on the **External Plot Button** to observe the window as below.
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image52.png"/>
</p>

6. Select the desired variable in the X and Y axes with the appropriate graph setings like log scale etc. Press **New Plot**. This will show the I-V characteristics of the defined PN junction.
<p align="center">
  <img src="/img/tutorial-extras/pn-junction/image53.png"/>
</p>