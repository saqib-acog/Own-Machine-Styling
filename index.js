const notification = document.querySelector(".toast")
const checkbox = document.getElementById("checkbox")
const containerDescription = document.querySelectorAll(".wrap-column")
const table = document.querySelector("table");
const portedFilterButton = document.getElementById("portedFilter");
const nonPortedFilterButton = document.getElementById("nonPortedFilter");
const showNotification = ()=>{
    notification.classList.add("active");
    setTimeout(() => {
        notification.classList.remove("active");
    }, 2000);
}


const isDarkMode = localStorage.getItem("darkMode") === "true";

document.body.classList.toggle("dark", isDarkMode);
checkbox.checked = isDarkMode;

checkbox.addEventListener("change", () => {
  const isDarkMode = checkbox.checked;
  document.body.classList.toggle("dark", isDarkMode);
  localStorage.setItem("darkMode", isDarkMode);
});

document.addEventListener("DOMContentLoaded", ()=>{
    showNotification();
    markPortRed();
});

for (let i = 0; i < containerDescription.length; i++){
    if (containerDescription[i].textContent.trim() == ""){
        containerDescription[i].textContent = "--"
    }
}

portedFilterButton.addEventListener("change", function () {
        if(portedFilterButton.checked){
            filterContainers(true);
        }else{
            clearFilter();
        }
      });
    
      nonPortedFilterButton.addEventListener("change", function () {
        if(nonPortedFilterButton.checked){
            filterContainers(false);
            }else{
                clearFilter();
            }      
        });
  
    function filterContainers(isPorted) {
      const tbody = table.querySelector("tbody");
      const rows = tbody.querySelectorAll("tr");
  
      rows.forEach((row) => {
        const portCell = row.querySelector(".port-cell");
        const hasPort = portCell.textContent.trim() !== "undefined";
  
        if ((isPorted && hasPort) || (!isPorted && !hasPort)) {
          row.style.display = "table-row";
        } else {
          row.style.display = "none";
        }
      });
    }
    function clearFilter(){
        const tbody = table.querySelector("tbody");
        const rows = tbody.querySelectorAll("tr");
        rows.forEach((row)=>{
            row.style.display = "table-row"
        })
    }

function markPortRed(){
    const portCells = document.querySelectorAll(".port-cell");
    portCells.forEach((portCell)=>{
        if(portCell.textContent.trim() == "undefined"){
            portCell.style.color = "#ff4b4b";
        }
    })
}

  
  
