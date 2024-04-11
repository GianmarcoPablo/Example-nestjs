import { HttpCode, Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-tasks.dto";
import { UpdateTaskDto } from "./dto/update-tasks.dto";

@Injectable()
export class TasksService {

    private tasks = [];

    getTasks() {
        return this.tasks;
    }

    getOneTask(id: any) {
        const taskFound = this.tasks.find(task => task.id === id);
        if (!taskFound) {
            return new NotFoundException(`Task with id ${id} not found`)
        }
        return taskFound;
    }

    createTask(body: CreateTaskDto) {
        this.tasks.push({
            id: this.tasks.length + 1,
            ...body

        });
        return this.tasks
    }

    updateTask(body: UpdateTaskDto) {
        return "Actualizando una tarea desde el servicio";
    }

    deleteTask() {
        return "Eliminando una tarea desde el servicio";
    }

    patchTask() {
        return "Parchando una tarea desde el servicio";
    }
}