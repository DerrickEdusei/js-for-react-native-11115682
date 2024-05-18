
function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage:
const originalNames = ["Derrick", "is", "coding", "with", "React"];
const modifiedNames = ["derrick", "was", "programming", "WITH", "REACT NATIVE"];  
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

