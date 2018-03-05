<script type="text/javascript">
    jQuery(document).ready(function($) {
        JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
            runShowAndHide();
        });

        function runShowAndHide() {
            const show = "block" //display states
            const hide = "none"

            const checks_array      = ["customfield_11278-1", "customfield_11278-2", "customfield_11278-3", "customfield_11278-4", "customfield_11278-5"].map(id => document.getElementById(id))
            const dtp_fields        = ["customfield_11101", "customfield_11366", "customfield_11339"].map(id => document.getElementById(id).parentElement)
                  icr_req_fields    = ["customfield_11725"].map(id => document.getElementById(id).parentElement), //yep, if they want to add more fields in this section we only need to put them into the array
                  plt_fields        = ["customfield_11359", "customfield_11347", "customfield_11354", "customfield_11356", "customfield_11369"].map(id => document.getElementById(id).parentElement),
                  preflight_fields  = [preflight_scope_field = document.getElementById("customfield_11371-1").parentElement.parentElement, 
                                       preflight_notes_field = document.getElementById("customfield_11397").parentElement],
                  final_eye_fields  = ["customfield_11943"].map(id => document.getElementById(id).parentElement);

            [dtp_fields, icr_req_fields, plt_fields, preflight_fields, final_eye_fields].map((section, index) => (function() {
                section.forEach(field => field.style.display = (checks_array[index].checked ? show : hide))
            })).forEach((func, index) => (function() {
                checks_array[index].addEventListener("click", func)
                func()  //we call the functions in order to keep consistency from the begining between the ckeckboxes and the fields
            })())
        }
        }
    );
</script>