CREATE TABLE usuarios (
    idUsuario SERIAL PRIMARY KEY,
    nombres VARCHAR(100) NOT NULL,
    apellidoPaterno VARCHAR(50) NOT NULL,
    apellidoMaterno VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nombres, apellidoPaterno, apellidoMaterno,
direccion, telefono) VALUES ('Marlon', 'Zarate', 'Astudillo', 'Calle principal', '6141234567');
