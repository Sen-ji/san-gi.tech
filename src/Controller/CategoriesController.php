<?php

namespace App\Controller;

use App\Entity\Articles;
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
        $catact = $this->getDoctrine()->getRepository(Categorie::class)->findByName($cat);
        return $this->render('categories/categories.html.twig', [
            "cat" => $cat,
            'categories' => $categories,
            'catact' =>$catact[0]
        ]);
    }
    #[Route('/blogRando/{cat}/{article}', name: 'blogRandoArticle')]
    public function blogRandoArticle(string $cat,string $article): Response
    {
        $categories = $this->getDoctrine()->getRepository(Categorie::class)->findAll();
        $art = $this->getDoctrine()->getRepository(Articles::class)->findOneByName($article);
        return $this->render('categories/article.html.twig', [
            "cat" => $cat,
            "article" =>$art,
            'categories' => $categories,
            'content'=>json_decode($art->getContent())
        ]);
    }
}
