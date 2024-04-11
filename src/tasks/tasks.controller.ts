import { Controller, Get, Post, Put, Delete, Patch, Req, Res, Body, Query, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Request, Response } from "express";
import { CreateTaskDto } from "./dto/create-tasks.dto";
import { UpdateTaskDto } from "./dto/update-tasks.dto";

@Controller({})
export class TaskController {

    constructor(
        private readonly taskService: TasksService
    ) { }

    @Get("/tasks")
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.taskService.getTasks();
    }

    @Get("/tasks/:id")
    getOneTask(@Param("id") id: string) {
        return this.taskService.getOneTask(Number(id));
    }

    @Post("/tasks")
    @UsePipes(new ValidationPipe())
    createTask(@Body() body: CreateTaskDto) {
        return this.taskService.createTask(body);
    }

    @Put("/tasks")
    updateTask(@Body() body: UpdateTaskDto) {
        return this.taskService.updateTask(body);
    }

    @Delete("/tasks")
    deleteTask() {
        return this.taskService.deleteTask();
    }

    @Patch("/tasks")
    patchTask() {
        return this.taskService.patchTask();
    }
}