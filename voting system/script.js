// List of valid voter IDs
const voterIds = ["1234", "5678", "91011"]; // Add more valid IDs as needed
let usedVoterIds = []; // To track IDs that have already voted

// Candidates list with details
const candidates = [
    { name: "Alice", img: "https://via.placeholder.com/150", votes: 0 },
    { name: "Bob", img: "https://via.placeholder.com/150", votes: 0 },
    { name: "Charlie", img: "https://via.placeholder.com/150", votes: 0 }
];

let selectedCandidateIndex = null; // Store the index of the selected candidate

// Function to verify voter ID
function verifyVoter() {
    const voterIdInput = document.getElementById("voterIdInput").value;

    // Check if voter ID is valid and not already used
    if (voterIds.includes(voterIdInput) && !usedVoterIds.includes(voterIdInput)) {
        alert("Voter ID verified! You can now vote.");
        usedVoterIds.push(voterIdInput); // Mark this ID as used
        document.getElementById("voterSection").style.display = "none"; // Hide voter ID section
        document.getElementById("candidates").style.display = "block"; // Show voting section
    } else if (usedVoterIds.includes(voterIdInput)) {
        alert("This Voter ID has already been used to vote!");
    } else {
        alert("Invalid Voter ID! Please try again.");
    }
}

// Display the candidates on the webpage
function displayCandidates() {
    const candidateList = document.getElementById("candidateList");
    candidateList.innerHTML = ""; // Clear previous content

    candidates.forEach((candidate, index) => {
        const candidateDiv = document.createElement("div");
        candidateDiv.className = "candidate-card";
        candidateDiv.innerHTML = `
            <img src="${candidate.img}" alt="${candidate.name}">
            <h3>${candidate.name}</h3>
            <button onclick="openPopup(${index})">Vote</button>
        `;
        candidateList.appendChild(candidateDiv);
    });
}

// Open the confirmation popup
function openPopup(index) {
    selectedCandidateIndex = index; // Store the selected candidate index
    document.getElementById("candidateName").textContent = candidates[index].name;
    document.getElementById("confirmationBox").style.display = "flex"; // Show popup
}

// Close the popup without voting
function closePopup() {
    document.getElementById("confirmationBox").style.display = "none";
    selectedCandidateIndex = null; // Reset the selected candidate index
}

// Confirm the vote
function confirmVote() {
    if (selectedCandidateIndex !== null) {
        candidates[selectedCandidateIndex].votes++; // Increment the vote count
        alert(`You voted for ${candidates[selectedCandidateIndex].name}!`);
        document.getElementById("confirmationBox").style.display = "none"; // Hide popup
        document.getElementById("candidates").style.display = "none"; // Hide voting section
        document.getElementById("thankYouSection").style.display = "block"; // Show Thank You message
    }
    selectedCandidateIndex = null; // Reset the selected candidate index
}

// Initial Display
displayCandidates();
