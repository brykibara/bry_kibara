// LIVE CLOCK AND DATE
function updateDateTime() {
const now = new Date();

const timeElement = document.getElementById("liveTime");
const dateElement = document.getElementById("liveDate");
const yearElement = document.getElementById("year");

if (timeElement) {
    timeElement.textContent = now.toLocaleTimeString("en-PH", {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
}

if (dateElement) {
    dateElement.textContent = now.toLocaleDateString("en-PH", {
        timeZone: "Asia/Manila",
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}

if (yearElement) {
    yearElement.textContent = now.getFullYear();
}

}

updateDateTime();
setInterval(updateDateTime, 1000);

// THEME SWITCH
const themeButton = document.getElementById("themeButton");
const themeButton2 = document.getElementById("themeButton2");
const themeName = document.getElementById("themeName");

function toggleTheme() {
document.body.classList.toggle("dark-mode");

const isDark = document.body.classList.contains("dark-mode");

if (themeName) {
    themeName.textContent = isDark
        ? "Dark Purple"
        : "Lavender Light";
}

if (themeButton) {
    themeButton.textContent = isDark
        ? "☀ Light"
        : "☾ Dark";
}

if (themeButton2) {
    themeButton2.textContent = isDark
        ? "☀ Light Mode"
        : "☾ Dark Mode";
}

}

if (themeButton) {
themeButton.addEventListener("click", toggleTheme);
}

if (themeButton2) {
themeButton2.addEventListener("click", toggleTheme);
}

// LOAD PORTFOLIO DATA FROM project.json
async function loadPortfolioData() {
try {
const response = await fetch("project.json");

    if (!response.ok) {
        throw new Error("Cannot load project.json");
    }

    const data = await response.json();
    const phone = document.getElementById("contactNumber");
const email = document.getElementById("contactEmail");
const facebook = document.getElementById("facebookLink");

if (data.contact) {
if (phone) {
phone.textContent = data.contact.phone || "Not provided";
}

if (email) {
    email.textContent = data.contact.email || "Not provided";
}

if (facebook && data.contact.facebook) {
    facebook.href = data.contact.facebook;
}

const hobbiesContainer = document.getElementById("hobbiesList");

if (hobbiesContainer && data.hobbies) {
hobbiesContainer.innerHTML = "";

data.hobbies.forEach(function(hobby) {
    const hobbyBox = document.createElement("div");
    hobbyBox.className = "hobby-box";
    hobbyBox.textContent = hobby;

    hobbiesContainer.appendChild(hobbyBox);
});

}

}


    // DISPLAY EDUCATION
    const educationContainer = document.getElementById("educationList");

const educationData = [
{
level: "Elementary",
school: "Name of Elementary School",
year: "Year Graduated"
},
{
level: "Junior High School",
school: "Name of Junior High School",
year: "Year Graduated"
},
{
level: "Senior High School",
school: "Name of Senior High School",
year: "Year Graduated"
},
{
level: "College",
school: "Bachelor of Science in Information Technology",
year: "Currently Studying"
}
];

if (educationContainer) {
educationContainer.innerHTML = "";

educationData.forEach(function(item) {
    const box = document.createElement("div");
    box.className = "education-box";

    const title = document.createElement("h3");
    title.textContent = item.level;

    const school = document.createElement("p");
    school.textContent = item.school;

    const year = document.createElement("small");
    year.textContent = item.year;

    box.appendChild(title);
    box.appendChild(school);
    box.appendChild(year);

    educationContainer.appendChild(box);
});

}


    // DISPLAY SKILLS
    const skillsContainer =
        document.getElementById("skillsList");

    if (skillsContainer && data.skills) {
        skillsContainer.innerHTML = "";

        data.skills.forEach(function(skill) {
            const skillBox = document.createElement("span");
            skillBox.className = "skill-tag";
            skillBox.textContent = skill;

            skillsContainer.appendChild(skillBox);
        });
    }


    // DISPLAY HOBBIES
    const hobbiesContainer =
        document.getElementById("hobbiesList");

    if (hobbiesContainer && data.hobbies) {
        hobbiesContainer.innerHTML = "";

        data.hobbies.forEach(function(hobby) {
            const hobbyBox = document.createElement("div");
            hobbyBox.className = "hobby-box";
            hobbyBox.textContent = hobby;

            hobbiesContainer.appendChild(hobbyBox);
        });
    }


    // DISPLAY CONTACT INFORMATION
    if (data.contact) {
        const phone =
            document.getElementById("contactNumber");

        const email =
            document.getElementById("contactEmail");

        const facebook =
            document.getElementById("facebookLink");

        if (phone) {
            phone.textContent =
                data.contact.phone || "Not provided";
        }

        if (email) {
            email.textContent =
                data.contact.email || "Not provided";
        }

        if (facebook && data.contact.facebook) {
            facebook.href = data.contact.facebook;
        }
    }

} catch (error) {
    console.error("Portfolio loading error:", error);
}

}

loadPortfolioData();