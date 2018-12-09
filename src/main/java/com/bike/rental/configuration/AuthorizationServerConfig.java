package com.bike.rental.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;

@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {
	private static final int TOKEN_VALIDITY_SEC = 3600;
	private static final String AUTHORIZATION_CODE = "authorization_code";
	private static final String GRANT_TYPE_PASSWORD = "password";

	@Autowired
    private AuthenticationManager authenticationManager;
	
	@Override
    public void configure(final AuthorizationServerEndpointsConfigurer endpoints) {
		endpoints.tokenStore(tokenStore())
			.authenticationManager(authenticationManager);
    }
	
	@Override
    public void configure(final ClientDetailsServiceConfigurer clients) throws Exception {
		clients.inMemory() 
	        .withClient("client") 
	        .secret("client")
	        .scopes("read", "write")
	        .accessTokenValiditySeconds(TOKEN_VALIDITY_SEC)
			.authorizedGrantTypes(GRANT_TYPE_PASSWORD, AUTHORIZATION_CODE);

    }

	@Bean
	public TokenStore tokenStore() {
		return new InMemoryTokenStore();
	}

}
