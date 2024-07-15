import { useState } from 'react'
import './Form.css'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    // Função para validar os dados do formulário
    const validate = () => {
      const newErrors = {};
  
      if (!formData.name) newErrors.name = 'Nome é obrigatório';
      if (!formData.email) {
        newErrors.email = 'Email é obrigatório';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email inválido';
      }
  
      if (!formData.password) {
        newErrors.password = 'Senha é obrigatória';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Senha precisa de pelo menos 8 caracteres';
      }
  
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Confirme sua senha';
      } else if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = 'As senhas devem coincidir';
      }
  
      return newErrors;
    };
  
    // Função para atualizar os dados do formulário
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
  
    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = validate();
  
      if (Object.keys(validationErrors).length === 0) {
        setSubmitted(true);
        setErrors({});
      } else {
        setErrors(validationErrors);
      }
    };
  
    return (
        <div className="registration-form">
            <h2>Registre-se</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Repita sua senha:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>

                <button type="submit" className="submit-button">Registrar</button>
            </form>

            {submitted && <p className="success-message">Registrado com sucesso!</p>}
        </div>
    )
}

export default RegistrationForm