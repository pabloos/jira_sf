<script type="text/javascript">
    jQuery(document).ready(function($) {
        JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
            showHidField()
        });

        showHidField()

        document.getElementsByClassName("select")[3].addEventListener("click", showHidField)

        function showHidField(){
            var sel = document.getElementsByClassName("select")[3]
            var option = sel.options[sel.selectedIndex].text

                document.getElementById("customfield_11342").parentElement.style.display = "none"
            if(option == 'Other'){
                document.getElementById("customfield_11342").parentElement.style.display = "block"
            }
        }

    });

</script>
