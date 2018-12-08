<div class="generic-container">
    <div class="panel panel-default">
        <div class="panel-heading">
            <span class="lead">Bike Rental</span></div>
          <div class="panel-body">
            <div class="col-md-4 col-md-offset-4">

                &nbsp
                <h2>Register</h2>
                <div ng-show="vm.error" class="alert alert-danger">{{vm.error}}</div>
                <form name="form" ng-submit="vm.register()" role="form">
                    &nbsp
                    <div class="row">
                    <div class="form-group col-md-12" ng-class="{ 'has-error': form.username.$dirty && form.username.$error.required }">
                        <label class="col-md-3" for="username">Username:</label>
                        <div class="col-md-9">
                        <input type="text" name="username" id="username" class="form-control" ng-model="vm.user.username" required />
                        <span ng-show="form.username.$dirty && form.username.$error.required" class="help-block">Username is required!</span>
                        </div>
                    </div>
                    </div>
                    &nbsp
                    <div class="row">
                    <div class="form-group col-md-12" ng-class="{ 'has-error': form.email.$dirty && form.email.$error.required }">
                        <label class="col-md-3" for="Email">Email:</label>
                        <div class="col-md-9">
                        <input type="text" name="email" id="email" class="form-control" ng-model="vm.user.email" required />
                        <span ng-show="form.email.$dirty && form.email.$error.required" class="help-block">Email is required!</span>
                        </div>
                    </div>
                    </div>
                    &nbsp
                    <div class="row">
                    <div class="form-group col-md-12" ng-class="{ 'has-error': form.password.$dirty && form.password.$error.required }">
                        <label class="col-md-3" for="password">Password:</label>
                        <div class="col-md-9">
                        <input type="password" name="password" id="password" class="form-control" ng-model="vm.user.password" required />
                        <span ng-show="form.password.$dirty && form.password.$error.required" class="help-block">Password is required!</span>
                        </div>
                    </div>
                    </div>
                    &nbsp
                    <div class="form-actions col-md-12">
                        <button type="submit" ng-disabled="form.$invalid" class="btn btn-primary">Register</button>
                        <a href="#/login" class="btn btn-link">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
