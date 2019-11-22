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
            allowNull: false,
            field: 'candidato'
        },
        curso: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'curso'
        },
        turno: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'turno'
        },
        curriculo: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'curriculo'
        },
        serie: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'serie'
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'nome_compl'
        },
        tipo_ingresso: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'tipo_ingresso'
        },
        ano_ingresso: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'ano_ingresso'
        },
        sem_ingresso: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'sem_ingresso'
        }
    }, {
        freezeTableName: true,
        tableName: 'ly_aluno',
        timestamps: false
    })

    return Alunos
}