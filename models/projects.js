module.exports = function (sequelize, DataTypes) {
    var projects = sequelize.define("projects", {
        project_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'No Project Name'
                },
                len: [1, 100]
            }
        },
        github_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'github URL'
                },
                len: [1, 100]
            }
        },
        deployed_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'deployed URL'
                },
                len: [1, 100]
            }
        },
        repo_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'deployed name'
                },
                len: [1, 100]
            }
        },
        main_photo: {
            type: DataTypes.STRING,
            allowNull: true
        }

    });

    return projects;
};
