import { IsArray, IsBoolean, IsEnum, IsString } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { PostCategory } from "../enums";

export class CreatePostDto {
    
    @IsString()
    title: string;
    
    @IsString()
    slug: string;
    
    @IsString()
    excerpt: string;
    
    @IsString()
    content: string;
    
    @IsEnum(PostCategory, {
        message: `Invalid option. Valids options are ${EnumToString(CreatePostDto)}`,
    })
    category: PostCategory;
    
    @IsArray()
    @IsString({ each: true })
    tags: string[];
    
    @IsBoolean()
    status: boolean;

}