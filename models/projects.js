module.exports = function (sequelize, DataTypes) {
    var projects = sequelize.define("projects", {
        project_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'No Project Name'
                },
                len: [1, 50]
            }
        },
        github_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'github URL'
                },
                len: [1, 50]
            }
        },
        deployed_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'deployed URL'
                },
                len: [1, 40]
            }
        },
        main_photo: {
            type: DataTypes.STRING,
            allowNull: true
        }

    });

    return projects;
};