<?php

namespace App\Controller;

use App\Entity\Categorie;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CategoriesController extends AbstractController
{
    #[Route('/blogRando/{cat}', name: 'blogRandoCat')]
    public function blogRandoCat(string $cat): Response
    {
        $categories = $this->getDoctrine()->getRepository(Categorie::class)->findAll();
        return $this->render('categories/categories.html.twig', [
            "cat" => $cat,
            'categories' => $categories
        ]);
    }
    #[Route('/blogRando/{cat}/{article}', name: 'blogRandoArticle')]
    public function blogRandoArticle(string $cat,string $article): Response
    {
        $categories = $this->getDoctrine()->getRepository(Categorie::class)->findAll();
        return $this->render('categories/article.html.twig', [
            "cat" => $cat,
            "article" =>$article,
            'categories' => $categories
        ]);
    }
}
