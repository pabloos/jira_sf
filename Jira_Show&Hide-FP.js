const show = "block" //display states
const hide = "none"

const checks_array = ["customfield_11278-1", "customfield_11278-2", "customfield_11278-3", "customfield_11278-4", "customfield_11278-5"].map(id => document.getElementById(id));

const fields =  {
    "customfield_11278-1": ["customfield_11101", "customfield_11366", "customfield_11339"].map(id => document.getElementById(id).parentElement),
    "customfield_11278-2": ["customfield_11725"].map(id => document.getElementById(id).parentElement),
    "customfield_11278-3": ["customfield_11359", "customfield_11347", "customfield_11354", "customfield_11356", "customfield_11369"].map(id => document.getElementById(id).parentElement), 
    "customfield_11278-4": [preflight_scope_field = document.getElementById("customfield_11371-1").parentElement.parentElement, preflight_notes_field = document.getElementById("customfield_11397").parentElement], 
    "customfield_11278-5": ["customfield_11943"].map(id => document.getElementById(id).parentElement),
};

const func = function() {
    fields[this.id].forEach(element => element.style.display = (this.checked ? show : hide))
}

checks_array.forEach(check => {
    check.addEventListener("click", func)
})