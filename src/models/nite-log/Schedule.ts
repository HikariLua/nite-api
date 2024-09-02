import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Col} from "sequelize/types/utils";
import User from "./User";

interface ScheduleAttributes {
    userId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
}

@Table({
    tableName: "schedule",
    modelName: "Schedule",
    timestamps: false,
})
export default class Schedule extends Model<ScheduleAttributes> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare dayOfWeek: number;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    declare startTime: string;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    declare endTime: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
    })
    declare userId: string;

    @BelongsTo(() => User)
    declare user: User;
}