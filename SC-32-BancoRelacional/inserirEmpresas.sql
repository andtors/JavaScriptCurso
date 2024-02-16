ALTER TABLE empresas MODIFY cnpj VARCHAR(14);   

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 19392054000178),
    ('Vale', 79202752000195),
    ('Cielo', 98841940000108);

DESC empresas;
DESC prefeitos;
SELECT * FROM empresas;
SELECT * FROM cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
 VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);
