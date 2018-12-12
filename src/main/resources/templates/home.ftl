<div class="generic-container">
    <div class="panel panel-default">
        <div class="panel-heading" data-ng-init="vm.init()">
            <span class="lead">Bike Rental</span></div>
        <div class="panel-body">
            &nbsp
            <h5>Welcome {{vm.user.name}} ! Select your desired bike!</h5>
            &nbsp

            <form name="form" ng-submit="vm.logout()" role="form">
                <div class="row">
                    <div class="form-group col-md-12" id="map"></div>
                </div>
                &nbsp
                <div class="row">
                    <div>
                        <button type="button" class="btn btn-primary">Logout</button>
                    </div>
                    &nbsp;
                    <div>
                        <button type="button" class="btn btn-danger">Delete account</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>