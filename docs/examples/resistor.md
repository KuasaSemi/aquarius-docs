# Determining the Expected Resistance of a Simple Silicon Resistor in TCAD

To determine the expected resistance $R$ of a simple silicon (Si) resistor in TCAD, use the classical resistance formula derived from Ohm’s Law and semiconductor physics.

---

## 1. Basic Resistance Formula

$$
R = \rho \cdot \frac{L}{A}
$$

Where:  
- $R$ = resistance (Ω)  
- $\rho$ = resistivity of doped silicon (Ω·cm)  
- $L$ = length of the resistor (cm)  
- $A$ = cross-sectional area = width × thickness (cm²)

---

## 2. Resistivity from Semiconductor Parameters

$$
\rho = \frac{1}{q \cdot \mu \cdot N}
$$

Where:  
- $q$ = elementary charge = \( 1.6 \times 10^{-19} \, \text{C} \)  
- $\mu$ = carrier mobility (cm²/V·s)  
- $N$ = doping concentration (cm⁻³)  
- For **n-type**: $\mu$ = $\mu_n$, $N$ = $N_D$  
- For **p-type**: $\mu$ = $\mu_p$, $N$ = $N_A$

Note: mobility depends on doping and temperature (TCAD can simulate this).

---

## 3. Combined Equation

$$
R = \frac{L}{q \cdot \mu \cdot N \cdot A}
$$
---



## 4. Aquarius Example Workflow

1. **Define geometry**: length, width, thickness of the resistor.
2. **Set doping profile**: e.g., Gaussian or uniform profile using a `doping` statement.
3. **Specify material**: Silicon with appropriate physical models (e.g., mobility models).
4. **Simulate**: extract terminal current vs. voltage using a DC sweep.
5. **Post-process**: compute resistance using \( R = \frac{V}{I} \), or compare with the analytical result.

---

## 5. Example Calculation

Use:
- Length ($L$) = 10µm ($10 \times 10^{-3}$ cm)
- Height $H$ = 1 µm ($0.1 \times 10^{-3}$ cm)
- Depth $D$ = 1 µm ($0.1 \times 10^{-3}$ cm)
- Doping $N_D$ = $1 \times 10^{16}$ cm/3
- Electron mobility $\mu_n$ approx 1000.

First calculate area:
$$
A = H \times D
$$

$$
A = (0.1\times 10^{-3}) \times (0.1\times 10^{-3}) = 1\times 10^{-8}cm/2
$$

then calculate resistance:

$$
R = \frac{10 \times 10^{-3}}{1.6 \times 10^{-19} \cdot 1000 \cdot 10^{16} \cdot 1 \times 10^{-8}} \approx 312.5 \, \Omega
$$

---

## Notes

- TCAD simulation will refine this estimate by accounting for:
  - Actual mobility degradation
  - Doping gradients
  - Contact resistance
  - Temperature effects
