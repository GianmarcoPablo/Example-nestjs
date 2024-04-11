import { IsString, MinLength, minLength } from "class-validator";

export class CreateTaskDto {

    @IsString()
    @MinLength(3)
    readonly name: string;

    @IsString()
    @MinLength(10)
    readonly description: string;
}
