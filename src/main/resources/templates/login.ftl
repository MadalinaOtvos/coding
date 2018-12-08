<div class="generic-container">
    <div class="panel panel-default">
        <div class="panel-heading">
            <span class="lead">Bike Rental</span></div>
        <div class="panel-body">

                &nbsp
                <h2>Login</h2>
                &nbsp
                <div ng-show="vm.error" class="alert alert-danger">{{vm.error}}</div>
                <form name="form" ng-submit="vm.login()" role="form">
                 <div class="col-md-4 col-md-offset-4">
                    <div class="row">
                    <div class="form-group col-md-12" ng-class="{ 'has-error': form.email.$dirty && form.email.$error.required }">
                        <label class="control-label col-md-3" for="email">Email:</label>
                        <div class="col-md-9">
                        <input type="text" name="email" id="email" class="form-control" ng-model="vm.email" required />
                        <span ng-show="form.email.$dirty && form.email.$error.required" class="help-block">Email is required!</span>
                        </div>
                    </div>
                    </div>
                    &nbsp
                    <div class="row">
                    <div class="form-group col-md-12" ng-class="{ 'has-error': form.password.$dirty && form.password.$error.required }">
                        <label class="control-label col-md-3" for="password">Password:</label>
                        <div class="col-md-9">
                        <input type="password" name="password" id="password" class="form-control" ng-model="vm.password" required />
                        <span ng-show="form.password.$dirty && form.password.$error.required" class="help-block">Password is required!</span>
                       </div>
                    </div>
                    </div>
                    &nbsp
                    <div class="form-actions col-md-12">
                        <button type="submit" ng-disabled="form.$invalid || vm.dataLoading" class="btn btn-primary">Login</button>
                        <a href="#/register" class="btn btn-link">Register</a>
                    </div>
                </form>
        </div>
    </div>
</div>