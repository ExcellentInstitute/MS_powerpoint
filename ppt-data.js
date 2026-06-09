// ppt-data.js
// Excellent Institute - Ultimate MS PowerPoint Masterclass Syllabus

const pptBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: The Absolute Basics",
        topics: [
            {
                heading: "Opening PowerPoint",
                text: "Look for a bright orange icon with the letter 'P'. Double-click it and choose 'Blank Presentation'. Think of PowerPoint as a digital chart paper. Instead of flipping pages in a book, we show our information on big, beautiful screens called 'Slides'.",
                shortcut: "Win Key, type 'PowerPoint', press Enter",
                imgSrc: "images/ppt-01-open.jpg"
            },
            {
                heading: "What are Slides?",
                text: "A slide is just a single screen of your presentation. When you start, you only have one slide. To make your story longer, you need more slides! Go to the Home tab and click the top half of the 'New Slide' button to instantly add a fresh page.",
                shortcut: "Ctrl + M (Instantly creates a new blank slide)",
                imgSrc: "images/ppt-02-slides.jpg"
            },
            {
                heading: "The Ribbon (Your Tool Box)",
                text: "Just like in Word and Excel, the thick bar at the top is called the Ribbon. It has different tabs. The 'Home' tab is for typing, 'Insert' is for adding pictures, and 'Design' is for making it look beautiful.",
                shortcut: "Ctrl + F1 (Hides or shows the Ribbon to save space)",
                imgSrc: "images/ppt-03-ribbon.jpg"
            },
            {
                heading: "Saving Your Presentation",
                text: "If you spend hours making a science project and don't save it, it will vanish! Click 'File', then 'Save As', and give it a simple name like 'Science Fair 2026'. Always save your work often.",
                shortcut: "Ctrl + S",
                imgSrc: "images/ppt-04-save.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Typing & Formatting",
        topics: [
            {
                heading: "Click to Add Title",
                text: "Unlike MS Word, you cannot just click anywhere on the white page and start typing. PowerPoint uses 'Text Boxes'. On a new slide, you will see dotted boxes that say 'Click to add title'. Just click inside those dotted lines and type your heading.",
                shortcut: "F2 (Jump inside a text box to edit words)",
                imgSrc: "images/ppt-05-typing.jpg"
            },
            {
                heading: "Drawing Your Own Text Box",
                text: "What if you want to type in the corner of the slide, but there is no dotted box there? Go to the 'Insert' tab, click 'Text Box', and then click anywhere on your slide. Now you can type freely wherever you want!",
                shortcut: "Alt + N, X (Selects the Text Box tool)",
                imgSrc: "images/ppt-06-textbox.jpg"
            },
            {
                heading: "Making Text Stand Out",
                text: "Nobody likes boring, tiny text on a big projector screen. Highlight your words, go to the Home tab, and make the font bigger. Use the 'B' button to make it Bold (thick), and change the font color to match your topic.",
                shortcut: "Ctrl + B (Bold), Ctrl + Shift + > (Make text bigger)",
                imgSrc: "images/ppt-07-fonts.jpg"
            },
            {
                heading: "Aligning Your Words",
                text: "Main titles should always sit directly in the middle of the slide. Highlight your text and click the 'Center Align' button in the Home tab. You can also align text to the Left (for bullet points) or Right (for dates).",
                shortcut: "Ctrl + E (Center Align), Ctrl + L (Left Align)",
                imgSrc: "images/ppt-08-align.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Slide Designs & Themes",
        topics: [
            {
                heading: "Applying a Theme",
                text: "A white background is boring. Go to the 'Design' tab. You will see a gallery of beautiful, ready-made 'Themes' (like dark blue tech themes or bright green nature themes). Click one, and PowerPoint will instantly paint all your slides to match!",
                shortcut: "Alt + G, H (Opens the Themes menu)",
                imgSrc: "images/ppt-09-themes.jpg"
            },
            {
                heading: "Changing Background Colors",
                text: "If you don't like the ready-made themes, you can paint the background yourself. In the Design tab, click 'Format Background' on the far right. You can choose a solid color, a fading gradient, or even put a photograph as your background.",
                shortcut: "Right-click the blank slide and choose 'Format Background'",
                imgSrc: "images/ppt-10-background.jpg"
            },
            {
                heading: "PowerPoint Design Ideas (AI Magic)",
                text: "If you have the modern version of PowerPoint, there is a magical AI designer built in! Just type a title and add a picture. Click 'Design Ideas' on the Home tab, and the computer will automatically generate 5 beautiful, professional layouts for you to choose from.",
                shortcut: "Alt + H, D, C (Opens Design Ideas panel)",
                imgSrc: "images/ppt-11-designer.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Pictures & Shapes",
        topics: [
            {
                heading: "Inserting Pictures",
                text: "A presentation without pictures is just a document! Go to the 'Insert' tab and click 'Pictures'. Choose a photo from your computer. Once it appears, grab the tiny circles on the corners to make the picture bigger or smaller.",
                shortcut: "Alt + N, P, D (Insert Picture from Device)",
                imgSrc: "images/ppt-12-pictures.jpg"
            },
            {
                heading: "Cropping Unwanted Parts",
                text: "If your photo has a lot of messy background you don't want to show, click the picture, go to the 'Picture Format' tab, and click 'Crop'. Black lines will appear on the edges. Drag them inward to chop off the bad parts like using digital scissors.",
                shortcut: "Alt + J, P, V, C (Activates the Crop tool)",
                imgSrc: "images/ppt-13-crop.jpg"
            },
            {
                heading: "Drawing Shapes (Arrows & Stars)",
                text: "To point at something important, don't use your finger! Go to the 'Insert' tab and click 'Shapes'. You can draw perfect arrows, circles, stars, and speech bubbles. Click the shape and use 'Shape Fill' to change its color.",
                shortcut: "Alt + N, S, H (Opens the Shapes gallery)",
                imgSrc: "images/ppt-14-shapes.jpg"
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: Arranging Objects",
        topics: [
            {
                heading: "Bring to Front / Send to Back",
                text: "If you put a large picture on your slide, it might hide your text box underneath it! Click the picture, right-click it, and choose 'Send to Back'. The picture slides behind the text, making your words readable again.",
                shortcut: "Ctrl + Shift + [ (Send to Back), Ctrl + Shift + ] (Bring to Front)",
                imgSrc: "images/ppt-15-arrange.jpg"
            },
            {
                heading: "Grouping Items Together",
                text: "If you draw a beautiful logo using a star, a circle, and a text box, moving them one by one is annoying. Highlight all three items with your mouse, right-click, and choose 'Group'. Now they are glued together and act like one single sticker!",
                shortcut: "Ctrl + G (Group), Ctrl + Shift + G (Ungroup)",
                imgSrc: "images/ppt-16-grouping.jpg"
            },
            {
                heading: "Perfect Alignment",
                text: "If you have three pictures and want them to line up perfectly straight, don't guess with your eyes. Select all three pictures, go to 'Picture Format', click 'Align', and choose 'Align Middle'. The computer snaps them into a perfectly straight line.",
                shortcut: "Alt + J, P, A, A (Opens Alignment menu)",
                imgSrc: "images/ppt-17-alignment.jpg"
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: Slide Transitions (Magic Movement)",
        topics: [
            {
                heading: "What is a Transition?",
                text: "A Transition is the cool animation that happens exactly when you move from Slide 1 to Slide 2. Instead of just blinking instantly, the page can smoothly fade away, push upwards, or dissolve like magic.",
                shortcut: "Alt + K (Opens the Transitions tab)",
                imgSrc: "images/ppt-18-transitions.jpg"
            },
            {
                heading: "Adding the 'Fade' or 'Push'",
                text: "Click on Slide 2 on the left side of your screen. Go to the 'Transitions' tab. Click 'Fade'. Now, when you play your slideshow, Slide 1 will beautifully melt into Slide 2. Try the 'Push' transition to make the slide slide up like a piece of paper.",
                shortcut: "Click 'Preview' on the far left to test it.",
                imgSrc: "images/ppt-19-fade.jpg"
            },
            {
                heading: "The Amazing Morph Tool",
                text: "Morph is the most advanced trick in PowerPoint 2024. If you have a small circle on Slide 1, and copy it to Slide 2 but make it massive, applying the 'Morph' transition will automatically animate the circle growing smoothly before your eyes!",
                shortcut: "Alt + K, M (Applies Morph transition)",
                imgSrc: "images/ppt-20-morph.jpg"
            }
        ]
    },
    {
        id: "chapter7",
        title: "Chapter 7: Custom Animations",
        topics: [
            {
                heading: "Entrance Animations (Flying In)",
                text: "Transitions move whole slides, but Animations move the things INSIDE the slide! Click a picture or a line of text. Go to the 'Animations' tab and click 'Fly In' (green star). When you present, the picture will wait hidden, and fly onto the screen when you click your mouse.",
                shortcut: "Alt + A (Opens the Animations tab)",
                imgSrc: "images/ppt-21-entrance.jpg"
            },
            {
                heading: "Emphasis and Exit",
                text: "Green stars are for entering. Yellow stars ('Emphasis') make a picture pulse or spin to grab attention while it is already on screen. Red stars ('Exit') make the picture fly away or disappear when you are done talking about it.",
                shortcut: "Alt + A, A, A (Add Animation menu)",
                imgSrc: "images/ppt-22-exit.jpg"
            },
            {
                heading: "The Animation Pane",
                text: "If you have 5 different things flying around, how do you control what goes first? Click 'Animation Pane' in the Animations tab. A side window opens showing a list of every animation. You can drag them up or down to change their order perfectly.",
                shortcut: "Alt + A, C (Opens the Animation Pane)",
                imgSrc: "images/ppt-23-pane.jpg"
            }
        ]
    },
    {
        id: "chapter8",
        title: "Chapter 8: Presenting Like a Professional",
        topics: [
            {
                heading: "Starting the Slideshow",
                text: "When you are finished designing, it is time to show it to the audience on the big screen! Do not let them see your editing tools. Press the magic button to turn your slide into a full-screen cinematic presentation.",
                shortcut: "F5 (Start from Slide 1), Shift + F5 (Start from current slide)",
                imgSrc: "images/ppt-24-slideshow.jpg"
            },
            {
                heading: "The Laser Pointer",
                text: "While presenting, you don't need to buy an expensive laser pointer tool. Hold down the 'Ctrl' key and left-click your mouse. Your mouse arrow magically turns into a glowing red laser dot on the screen so you can point at specific words!",
                shortcut: "Ctrl + Left Mouse Click (Hold to use Laser)",
                imgSrc: "images/ppt-25-laser.jpg"
            },
            {
                heading: "Blacking Out the Screen",
                text: "Sometimes, the audience stops listening to you and only reads the screen. To get their attention back, press a secret key to instantly turn the projector screen pitch black. When they look at you, keep talking! Press the key again to bring the slide back.",
                shortcut: "B (Turns screen Black), W (Turns screen White)",
                imgSrc: "images/ppt-26-blackout.jpg"
            }
        ]
    },
    {
        id: "chapter9",
        title: "Chapter 9: Tables, Charts & SmartArt",
        topics: [
            {
                heading: "Inserting Tables",
                text: "If you need to show a class routine or comparison data, use a Table. Go to the 'Insert' tab, click 'Table', and drag your mouse over the little squares to pick how many rows and columns you need. It creates a neat grid automatically.",
                shortcut: "Alt + N, T (Opens Table grid)",
                imgSrc: "images/ppt-27-table.jpg"
            },
            {
                heading: "SmartArt (Instant Flowcharts)",
                text: "If you want to explain the Water Cycle or a family tree, don't draw circles manually! Go to 'Insert' > 'SmartArt'. Choose a cycle or hierarchy diagram. It draws a beautiful, colorful flowchart instantly—you just type the words into the boxes.",
                shortcut: "Alt + N, M (Opens SmartArt Gallery)",
                imgSrc: "images/ppt-28-smartart.jpg"
            },
            {
                heading: "Inserting Charts",
                text: "To show a graph of your exam marks, go to 'Insert' > 'Chart'. Choose a Bar graph or Pie chart. A tiny Excel window will pop up. Type your numbers there, and the graph on your PowerPoint slide will build itself automatically!",
                shortcut: "Alt + N, C (Opens Insert Chart menu)",
                imgSrc: "images/ppt-29-chart.jpg"
            }
        ]
    },
    {
        id: "chapter10",
        title: "Chapter 10: The Slide Master",
        topics: [
            {
                heading: "What is the Slide Master?",
                text: "Imagine you have 50 slides, and your teacher tells you to put the Excellent Institute logo in the bottom corner of every single page. Do NOT paste it 50 times! The Slide Master is the secret 'blueprint' of your presentation. If you change the Master, it changes all 50 slides instantly.",
                shortcut: "Alt + W, M (Opens Slide Master View)",
                imgSrc: "images/ppt-30-master.jpg"
            },
            {
                heading: "Editing the Master Template",
                text: "Go to the 'View' tab and click 'Slide Master'. Scroll up on the left side and click the very top 'Number 1' slide. Paste your logo here and change the main title font to red. Click 'Close Master View', and magically, every slide in your project is updated!",
                shortcut: "Click 'Close Master View' to return to normal typing",
                imgSrc: "images/ppt-31-editmaster.jpg"
            }
        ]
    },
    {
        id: "chapter11",
        title: "Chapter 11: Video & Audio Magic",
        topics: [
            {
                heading: "Inserting a Video File",
                text: "You can play movies directly inside your presentation! Go to 'Insert' > 'Video' > 'This Device'. Choose an MP4 file. A video player appears on your slide. You can even drag the corners to resize the TV screen to fit perfectly.",
                shortcut: "Alt + N, V, D (Insert Video from PC)",
                imgSrc: "images/ppt-32-video.jpg"
            },
            {
                heading: "Adding Background Music",
                text: "Want a soft instrumental song playing while your slides show? Go to 'Insert' > 'Audio'. Pick an MP3 song. A tiny speaker icon appears. Click on it, go to 'Playback' at the top, and check the box that says 'Play across slides' so the music doesn't stop when you change pages.",
                shortcut: "Alt + N, O, A (Insert Audio)",
                imgSrc: "images/ppt-33-audio.jpg"
            }
        ]
    },
    {
        id: "chapter12",
        title: "Chapter 12: Action Buttons (Making Games)",
        topics: [
            {
                heading: "Creating a Hyperlink",
                text: "You can turn a normal word into a clickable link. Highlight a word, right-click it, and choose 'Link'. You can link it to a website, or better yet, link it to 'Slide 5' in your own presentation! This lets you jump around your slides like a website.",
                shortcut: "Ctrl + K (Opens the Hyperlink menu)",
                imgSrc: "images/ppt-34-hyperlink.jpg"
            },
            {
                heading: "Action Buttons for a Pop-Quiz",
                text: "You can make an interactive quiz game! Go to 'Shapes' and scroll to the very bottom to find 'Action Buttons'. Draw one on your slide. A menu asks 'Action on click'. Tell it to 'Hyperlink to Next Slide'. Now, when a student clicks that exact button, the game moves forward!",
                shortcut: "Draw an invisible square over a picture to make the picture clickable!",
                imgSrc: "images/ppt-35-action.jpg"
            }
        ]
    },
    {
        id: "chapter13",
        title: "Chapter 13: Advanced Pro Animations",
        topics: [
            {
                heading: "Motion Paths (Drawing a Race Track)",
                text: "Instead of just flying in a straight line, you can make a picture of a car drive on a curvy road! Go to 'Animations', click 'Add Animation', scroll to the bottom, and choose 'Custom Path'. Use your mouse to draw a curvy line, and the object will follow exactly where you drew!",
                shortcut: "Double-click to stop drawing the custom path",
                imgSrc: "images/ppt-36-motion.jpg"
            },
            {
                heading: "The Animation Painter",
                text: "If you spend 5 minutes making a text box bounce, spin, and fade away, don't do it again for the next box! Click the finished box, click 'Animation Painter' (in the Animations tab), and click the new box. It copies all the complex animations instantly.",
                shortcut: "Alt + A, P (Activates Animation Painter)",
                imgSrc: "images/ppt-37-anim-painter.jpg"
            }
        ]
    },
    {
        id: "chapter14",
        title: "Chapter 14: Printing & Exporting",
        topics: [
            {
                heading: "Printing Handouts for Students",
                text: "Do NOT print one slide per paper—it wastes ink! Go to 'File' > 'Print'. Under settings, change 'Full Page Slides' to '3 Slides (Handouts)'. It will print 3 small slides on the left, and draw neat empty lines on the right so students can take notes.",
                shortcut: "Ctrl + P (Opens Print Menu)",
                imgSrc: "images/ppt-38-handouts.jpg"
            },
            {
                heading: "Exporting as an MP4 Video",
                text: "Did you know you can turn your presentation into a real movie? Go to 'File' > 'Export' > 'Create a Video'. PowerPoint will play your slides, run all your animations, play your background music, and save it as an MP4 video file you can put on YouTube!",
                shortcut: "Alt + F, E, A (Export as Video)",
                imgSrc: "images/ppt-39-export.jpg"
            }
        ]
    },
    {
        id: "chapter15",
        title: "Chapter 15: Speedy Pro Shortcuts",
        topics: [
            {
                heading: "The Duplicate Command (Ctrl+D)",
                text: "Copy and Paste takes two steps (Ctrl+C, then Ctrl+V). If you want an exact copy of a shape or a whole slide, just select it and press Ctrl+D! It instantly duplicates the item in one blink of an eye.",
                shortcut: "Ctrl + D (Instant Duplicate)",
                imgSrc: "images/ppt-40-duplicate.jpg"
            },
            {
                heading: "Turning on Guides and Gridlines",
                text: "Professionals never guess if a picture is perfectly centered. Go to the 'View' tab and check the boxes for 'Ruler' and 'Guides'. A faint crosshair will appear on your screen cutting it into perfect quarters so you can design with extreme accuracy.",
                shortcut: "Alt + F9 (Turns smart Guides on and off)",
                imgSrc: "images/ppt-41-guides.jpg"
            }
        ]
    }
];
