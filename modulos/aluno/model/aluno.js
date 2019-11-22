'use strict'

module.exports = (sequelize, DataTypes) => {

    const Alunos = sequelize.define('Aluno', {
        id: {
            type: DataTypes.STRING(20),
            primaryKey: true,
            field: 'aluno'
        },
        candidato: {
            type: DataTypes.STRING(20),
            required: false,
            field: 'candidato'
        },
        curso: {
            type: DataTypes.STRING(20),
            required: true,
            field: 'curso'
        },
        turno: {
            type: DataTypes.STRING(20),
            required: true,
            field: 'turno'
        },
        curriculo: {
            type: DataTypes.STRING(20),
            required: true,
            field: 'curriculo'
        },
        serie: {
            type: DataTypes.INTEGER,
            required: true,
            field: 'serie'
        },
        nome: {
            type: DataTypes.STRING(100),
            required: true,
            field: 'nome_compl'
        },
        tipo_ingresso: {
            type: DataTypes.STRING(20),
            required: true,
            field: 'tipo_ingresso'
        },
        ano_ingresso: {
            type: DataTypes.INTEGER,
            required: true,
            field: 'ano_ingresso'
        },
        sem_ingresso: {
            type: DataTypes.INTEGER,
            required: true,
            field: 'sem_ingresso'
        }
    }, {
        freezeTableName: true,
        tableName: 'ly_aluno',
        timestamps: false
    })

    return Alunos
}