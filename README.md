# ExoPana

## High-Level Summary
ExoPana is a web-based application designed to visualize how constellations would appear from the perspective of habitable exoplanets. Our platform allows users to choose from a selection of over 5,500 exoplanets and generate an interactive star chart that accurately reflects the night sky from each of these distant worlds. ExoPana offers an engaging and educational experience where users can draw and name constellations, just as our ancestors did on Earth.

This solution addresses the challenge of visualizing exoplanetary skies by developing a three-dimensional point cloud of stars based on parallax measurements and luminosity data. It translates the vast data from star catalogs into an interactive format that is accessible and educational for students, allowing them to connect their experience with Earth’s night sky to the larger galaxy and beyond. ExoPana also supports exporting high-quality images for printing or virtual reality viewing, further enhancing its educational potential.

## Project Demo
- [Final Project Repository](https://github.com/marcoantonnlopez/ExoPana.git)

## Project Details
ExoPana is a web-based prototype that allows users to explore various exoplanets and visualize how constellations appear from their perspective. Currently, the prototype provides the ability to explore specific planets and displays a conceptual layout of how the constellations would look. In the future, we aim to enhance this functionality by providing a 2D representation of star maps and eventually expand to 3D visualizations, allowing for a more immersive and interactive experience.

### Technologies Used
- **Frontend**: HTML, JavaScript, CSS for a responsive and visually engaging user interface.
- **Backend**: Python for calculations involving astronomical data.
- **Astronomical Data**: Utilized Gaia and SIMBAD databases for information on celestial coordinates and star data.
- **Data Processing**: Libraries like Pandas, Numpy, Plotly, Astropy, Astroquery (Gaia and SIMBAD) were employed for data retrieval and processing.
- **Design Tools**: Figma for prototyping the user interface.

### How It Works
- Selected *Trappist-1b* as an example exoplanet.
- Retrieved data from Gaia and SIMBAD databases for star luminosity and distances.
- Converted polar coordinates (RA, Dec, Distance) into Cartesian coordinates (x, y, z).
- Generated star maps reflecting the constellations visible from the exoplanet's perspective.

### Future Improvements
- Integrate a search functionality for specific regions of the sky near selected exoplanets to optimize data retrieval and computational load.
- Enhance the graphical visualization of relative star brightness.
- Expand from 2D to fully interactive 3D star maps for a richer user experience.

## Use of Artificial Intelligence
We utilized ChatGPT, an AI language model developed by OpenAI, to assist in various aspects of development, particularly in refining CSS styles and ensuring the interface was both functional and visually appealing. The AI provided code snippets and guidance on best practices, enabling a faster prototyping process.

## Space Agency Data
ExoPana leverages data from:
- ExoPlant Database
- Star Catalogs (Gaia, SIMBAD)
- Custom data sets for exoplanets like Trappist-1b, Gliese 12b, and Kepler-402-b.

## Team Members
- Andrés Bonilla
- Santiago Erazo
- Marco Antonio Lopez
- Sebastián Manosalva

## References
- Images of Trappist-1D, Gliese 12b, Kepler-402-b
- Celestial coordinates data from Gaia
- Tools: Astroquery.Gaia, Spherical coordinates calculations

## Conclusion
ExoPana not only offers a novel way to visualize space but also serves as an educational tool for astronomy enthusiasts and students, connecting them through shared interests. The platform aims to merge technology and science, turning the complex data of star catalogs into accessible and interactive visuals, promoting a deeper understanding of our galaxy.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/marcoantonnlopez/ExoPana.git
