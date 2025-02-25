# i ching app 3

## About
This code was generated by [CodeCraftAI](https://codecraft.name)

**User requests:**
create web app that allows user to replicate the I ching coin toss. Allow image to be imported for all 64 hexagrams. After user clicks "Throw Coins" Button the hexagram image appears with description of hexagram and a Changing line description appears when needed leading to second button to be pressed titled "Changing Hexagram" where second hexagram appears with another imported image. Use pixel font. Use grey background. Create app with only HTML, CSS, JavaScript. At bottom of app Include link code  <a href="https://pixel-oracle.com/" target="_blank" rel="noopener noreferrer">Visit Pixel Oracle</a> .

Check OUTPUT.md for the complete unaltered output.

## Project Plan
```
Here’s a **simple and clear project plan** for building the I Ching coin toss web app based on your requirements. The plan includes main tasks and technical considerations for each step.

---

### **Project Plan**

#### **Phase 1: Setup and Planning**
1. **Define Project Scope**:
   - Confirm the app features and requirements.
   - Gather all 64 hexagram images and their descriptions (including changing lines).

2. **Set Up Development Environment**:
   - Create a project folder with the following structure:
     ```
     /iching-app
       ├── index.html
       ├── styles.css
       ├── script.js
       ├── images/ (store all hexagram images here)
       └── data.json (store hexagram descriptions and changing lines)
     ```

3. **Prepare Data**:
   - Create a `data.json` file to store hexagram descriptions and changing lines.
   - Example structure:
     ```json
     {
       "1": {
         "name": "The Creative",
         "description": "Description of hexagram 1...",
         "changingLines": {
           "1": "Description of changing line 1...",
           "2": "Description of changing line 2..."
         }
       },
       "2": {
         "name": "The Receptive",
         "description": "Description of hexagram 2...",
         "changingLines": {
           "1": "Description of changing line 1...",
           "2": "Description of changing line 2..."
         }
       },
       ...
     }
     ```

---

#### **Phase 2: HTML Structure**
1. **Create `index.html`**:
   - Add the basic HTML structure.
   - Include placeholders for:
     - "Throw Coins" button.
     - Hexagram image display.
     - Hexagram description.
     - "Changing Hexagram" button.
     - Second hexagram image and description.
     - Hyperlink to "Pixel Oracle".

   Example:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>I Ching Coin Toss</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
       <div class="container">
           <button id="throw-coins">Throw Coins</button>
           <div id="hexagram-display">
               <img id="hexagram-image" src="" alt="Hexagram Image">
               <p id="hexagram-description"></p>
           </div>
           <button id="changing-hexagram" style="display: none;">Changing Hexagram</button>
           <div id="second-hexagram-display" style="display: none;">
               <img id="second-hexagram-image" src="" alt="Second Hexagram Image">
               <p id="second-hexagram-description"></p>
           </div>
           <a href="https://pixel-oracle.com/" target="_blank" rel="noopener noreferrer">Visit Pixel Oracle</a>
       </div>
       <script src="script.js"></script>
   </body>
   </html>
   ```

---

#### **Phase 3: CSS Styling**
1. **Create `styles.css`**:
   - Set the background color to grey.
   - Use a pixel font (e.g., "Press Start 2P" from Google Fonts).
   - Style buttons, images, and text areas for a clean, retro look.

   Example:
   ```css
   body {
       background-color: grey;
       font-family: 'Press Start 2P', cursive;
       text-align: center;
       color: white;
   }

   .container {
       margin: 20px auto;
       max-width: 600px;
   }

   button {
       padding: 10px 20px;
       font-family: 'Press Start 2P', cursive;
       background-color: black;
       color: white;
       border: none;
       cursor: pointer;
   }

   img {
       max-width: 100%;
       height: auto;
   }

   a {
       color: white;
       text-decoration: none;
       margin-top: 20px;
       display: block;
   }
   ```

---

#### **Phase 4: JavaScript Logic**
1. **Create `script.js`**:
   - Add logic to:
     - Randomly generate a hexagram when the "Throw Coins" button is clicked.
     - Display the corresponding hexagram image and description.
     - Check for changing lines and display their descriptions.
     - Show the "Changing Hexagram" button if there are changing lines.
     - Display the second hexagram and its description when the "Changing Hexagram" button is clicked.

   Example:
   ```javascript
   const hexagramData = {
       // Load data from data.json or define it here
   };

   const throwCoinsButton = document.getElementById('throw-coins');
   const changingHexagramButton = document.getElementById('changing-hexagram');
   const hexagramImage = document.getElementById('hexagram-image');
   const hexagramDescription = document.getElementById('hexagram-description');
   const secondHexagramImage = document.getElementById('second-hexagram-image');
   const secondHexagramDescription = document.getElementById('second-hexagram-description');
   const secondHexagramDisplay = document.getElementById('second-hexagram-display');

   throwCoinsButton.addEventListener('click', () => {
       const randomHexagramId = Math.floor(Math.random() * 64) + 1;
       const hexagram = hexagramData[randomHexagramId];

       // Display first hexagram
       hexagramImage.src = `images/hexagram-${randomHexagramId}.png`;
       hexagramDescription.textContent = hexagram.description;

       // Check for changing lines
       if (Object.keys(hexagram.changingLines).length > 0) {
           changingHexagramButton.style.display = 'block';
       } else {
           changingHexagramButton.style.display = 'none';
       }

       // Reset second hexagram display
       secondHexagramDisplay.style.display = 'none';
   });

   changingHexagramButton.addEventListener('click', () => {
       const randomHexagramId = Math.floor(Math.random() * 64) + 1;
       const hexagram = hexagramData[randomHexagramId];

       // Display second hexagram
       secondHexagramImage.src = `images/hexagram-${randomHexagramId}.png`;
       secondHexagramDescription.textContent = hexagram.description;
       secondHexagramDisplay.style.display = 'block';
   });
   ```

---

#### **Phase 5: Testing and Deployment**
1. **Test the App**:
   - Ensure all buttons and features work as expected.
   - Test responsiveness on different devices.

2. **Deploy the App**:
   - Host the app on a platform like GitHub Pages, Netlify, or Vercel.

---

### **Technical Considerations**
1. **Hexagram Image Mapping**:
   - Ensure all 64 hexagram images are named consistently (e.g., `hexagram-1.png`, `hexagram-2.png`).

2. **Randomization**:
   - Use `Math.random()` to generate random hexagram IDs.

3. **Responsive Design**:
   - Use CSS media queries to ensure the app looks good on all screen sizes.

4. **Performance**:
   - Optimize image sizes for faster loading.

---

This plan should help you or another developer build the app efficiently. Let me know if you need further assistance!
```
