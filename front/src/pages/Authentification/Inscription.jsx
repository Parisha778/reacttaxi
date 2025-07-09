import React from 'react'

//IMAGE

const Inscription = () => {
  return (

    <inscription>
    <nav>
        <div className="nav-item">
            <a className="navbar-brand"href="projet-index">
                <img src="../images/logo(1).png" alt="logo" className="site-logo">
            </a>
            <p>Incrivez-vous</p>
        </div>
    </nav>

    <div className="mb-3">
        <label for="id-email" className="form-label">Votre email</label>
        <input type="email" className="form-control" id="id-email" placeholder="name@example.com" name="email" required>
        <div className="valid-feedback">Email correct</div>
        <div className="invalid-feedback">Email incorrect</div>
    </div>

    <div className="mb-3">
        <label for="id-modedepasse" className="form-label">Mode de passe</label>
        <input type="modedepasse" className="form-control" id="id-email"  name="mode de passe" required>
        <div className="valid-feedback">Mode de passe correct</div>
        <div className="invalid-feedback">Mode de passe incorrect</div>
    </div>

    <div className="mb-3">
        <a href="#">Oublié mode de passe</a> 
    </div>
    
    
    <button className="button">Incrivez-vous</button>
    </inscription>
    
  );
};

export default Inscription;