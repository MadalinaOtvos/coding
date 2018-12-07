<div class="generic-container">
    <div class="panel panel-default">
        <div class="panel-heading">
            <span class="lead">Bike Rental</span></div>
        <div class="panel-body">
            <div class="col-md-6 col-md-offset-4">

                &nbsp
                <div ng-show="vm.error" class="alert alert-danger">{{vm.error}}</div>
                <form name="form" ng-submit="vm.login()" role="form">
                    <div class="form-group col-md-8" ng-class="{ 'has-error': form.email.$dirty && form.email.$error.required }">
                        <label class="col-md-2" for="email">Email</label>
                        <input type="text" name="email" id="email" class="form-control col-md-6" ng-model="vm.email" required />
                        <span ng-show="form.email.$dirty && form.email.$error.required" class="help-block">email is required</span>
                    </div>
                    <div class="form-group col-md-8" ng-class="{ 'has-error': form.password.$dirty && form.password.$error.required }">
                        <label class="col-md-2" for="password">Password</label>
                        <input type="password" name="password" id="password" class="form-control col-md-6" ng-model="vm.password" required />
                        <span ng-show="form.password.$dirty && form.password.$error.required" class="help-block">Password is required</span>
                    </div>
                    <div class="form-actions col-md-8">
                        <button type="submit" ng-disabled="form.$invalid || vm.dataLoading" class="btn btn-primary">Login</button>
                        <a href="#/register" class="btn btn-link">Register</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>