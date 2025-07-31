const otherdataModel = require('./otherdataSchema')

exports.viewOtherData = async(req, res) => {
    try {
        // const viewTask = await taskModel.find({taskname : req.query.taskname}) || await taskModel.find({employeesToAdd : req.query.employeesToAdd});
        const viewOtherData = await otherdataModel.find();
        // const a = viewOtherData[0].sector
        res.status(200).json({
            message : "data displayed",
            viewOtherData
        })
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}